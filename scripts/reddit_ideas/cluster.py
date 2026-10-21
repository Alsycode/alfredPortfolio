"""Cluster the top-scored posts into product ideas with Claude -> data/ideas.md.

Needs ANTHROPIC_API_KEY in .env. Optional: skip it and read scored.csv yourself.
"""
import json
import os
import sys
from pathlib import Path

import anthropic
from dotenv import load_dotenv

HERE = Path(__file__).parent
TOP_N = 60
MODEL = "claude-sonnet-5-5"

PROMPT = """These are Reddit posts from landlord communities, each with top comments.
Group them into distinct recurring problems that a small software product could solve.
For each problem (max 8, ranked by likely willingness to pay):
- Problem (one sentence) and who has it
- Evidence: 2-3 post URLs with a short quote each
- Tools they currently use or complain about
- Payment signals (prices mentioned, "I'd pay", cancelled subscriptions)
- Product idea + rough price point
- Biggest risk (crowded market, low willingness to pay, etc.)
Be skeptical: drop one-off complaints and anything with no sign people pay.

POSTS:
{posts}"""


def main() -> None:
    load_dotenv(HERE / ".env")
    if not os.environ.get("ANTHROPIC_API_KEY"):
        sys.exit("Set ANTHROPIC_API_KEY in scripts/reddit_ideas/.env")

    import csv
    top = list(csv.DictReader((HERE / "data" / "scored.csv").open(encoding="utf-8")))[:TOP_N]
    by_url = {}
    for line in (HERE / "data" / "posts.jsonl").open(encoding="utf-8"):
        r = json.loads(line)
        by_url[r["url"]] = r

    blocks = []
    for row in top:
        r = by_url[row["url"]]
        comments = "\n".join(f"  - {c[:300]}" for c in r["comments"][:5])
        blocks.append(f"URL: {r['url']}\nTITLE: {r['title']}\nBODY: {r['body'][:800]}\nCOMMENTS:\n{comments}")

    msg = anthropic.Anthropic().messages.create(
        model=MODEL,
        max_tokens=4000,
        messages=[{"role": "user", "content": PROMPT.format(posts="\n\n---\n\n".join(blocks))}],
    )
    out = HERE / "data" / "ideas.md"
    out.write_text(msg.content[0].text, encoding="utf-8")
    print(f"Wrote {out}")


if __name__ == "__main__":
    main()
