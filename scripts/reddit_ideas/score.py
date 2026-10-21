"""Score fetched posts for pain + willingness to pay -> data/scored.csv."""
import csv
import json
import math
from pathlib import Path

import config

HERE = Path(__file__).parent
IN = HERE / "data" / "posts.jsonl"
OUT = HERE / "data" / "scored.csv"


def hits(text: str, terms: list[str]) -> int:
    return sum(1 for t in terms if t in text)


def score(rec: dict) -> dict:
    text = " ".join([rec["title"], rec["body"], *rec["comments"]]).lower()
    pain = hits(text, config.PAIN)
    pay = hits(text, config.PAY)
    tools = hits(text, config.TOOLS)
    recurring = hits(text, config.RECURRING)
    engagement = math.log1p(rec["score"] + rec["num_comments"])
    # Payment + named-tool signals weigh most; engagement just breaks ties.
    total = 2 * pay + 2 * tools + 1.5 * recurring + pain + 0.5 * engagement
    return {
        "score": round(total, 1),
        "pain": pain, "pay": pay, "tools": tools, "recurring": recurring,
        "matched": "|".join(sorted(set(rec["matched"]))),
        "subreddit": rec["subreddit"],
        "upvotes": rec["score"],
        "comments": rec["num_comments"],
        "title": rec["title"],
        "url": rec["url"],
    }


def main() -> None:
    rows = [score(json.loads(line)) for line in IN.open(encoding="utf-8")]
    rows.sort(key=lambda r: r["score"], reverse=True)
    with OUT.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0]))
        w.writeheader()
        w.writerows(rows)
    print(f"Scored {len(rows)} posts -> {OUT}")
    for r in rows[:10]:
        print(f"{r['score']:>5}  r/{r['subreddit']}  {r['title'][:80]}")


if __name__ == "__main__":
    main()
