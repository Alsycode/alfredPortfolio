"""Scrape competitor pricing pages with Scrapling -> data/competitors.json + competitors.csv.

Only fetches public pages that robots.txt allows. Review sites (G2, Capterra) block bots
and forbid scraping, so read those by hand.
"""
import csv
import json
import re
import time
from pathlib import Path
from urllib.parse import urlparse
from urllib.robotparser import RobotFileParser

from scrapling.fetchers import Fetcher

import config

HERE = Path(__file__).parent
OUT = HERE / "data"
UA = "landlord-idea-research/0.1"
PRICE = re.compile(r"\$\s?\d[\d,]*(?:\.\d{2})?(?:\s?(?:/|per)\s?(?:mo|month|unit|yr|year))?", re.I)


def allowed(url: str) -> bool:
    p = urlparse(url)
    rp = RobotFileParser(f"{p.scheme}://{p.netloc}/robots.txt")
    try:
        rp.read()
    except Exception:
        return True  # robots.txt unreachable: treat as no restrictions
    return rp.can_fetch(UA, url)


def scrape(name: str, url: str) -> dict:
    rec = {"name": name, "url": url, "status": None, "prices": [], "headings": [], "free_tier": False}
    if not allowed(url):
        rec["status"] = "blocked by robots.txt"
        return rec
    try:
        page = Fetcher.get(url, stealthy_headers=True, timeout=25)
    except Exception as e:
        rec["status"] = f"error: {type(e).__name__}"
        return rec
    rec["status"] = page.status
    text = re.sub(r"\s+", " ", page.get_all_text(separator=" "))
    rec["prices"] = list(dict.fromkeys(m.group(0).strip() for m in PRICE.finditer(text)))[:20]
    rec["headings"] = [h.get_all_text().strip() for h in page.css("h1, h2, h3")][:25]
    rec["free_tier"] = bool(re.search(r"\bfree\b", text, re.I))
    return rec


def main() -> None:
    OUT.mkdir(exist_ok=True)
    rows = []
    for name, url in config.COMPETITORS.items():
        print(f"{name} ...", flush=True)
        rows.append(scrape(name, url))
        time.sleep(2)  # be polite
    (OUT / "competitors.json").write_text(json.dumps(rows, indent=2), encoding="utf-8")
    with (OUT / "competitors.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["name", "status", "free_tier", "prices", "url"])
        for r in rows:
            w.writerow([r["name"], r["status"], r["free_tier"], " | ".join(r["prices"][:8]), r["url"]])
    for r in rows:
        print(f"{r['name']:<12} {str(r['status']):<8} {', '.join(r['prices'][:5])}")


if __name__ == "__main__":
    main()
