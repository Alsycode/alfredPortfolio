"""Pull landlord-niche posts via the official Reddit API (PRAW) into data/posts.jsonl."""
import json
import os
import sys
from pathlib import Path

import praw
from dotenv import load_dotenv

import config

HERE = Path(__file__).parent
OUT = HERE / "data" / "posts.jsonl"


def client() -> praw.Reddit:
    load_dotenv(HERE / ".env")
    try:
        return praw.Reddit(
            client_id=os.environ["REDDIT_CLIENT_ID"],
            client_secret=os.environ["REDDIT_CLIENT_SECRET"],
            user_agent=os.environ.get("REDDIT_USER_AGENT", "landlord-idea-research/0.1"),
        )
    except KeyError as e:
        sys.exit(f"Missing {e.args[0]} in scripts/reddit_ideas/.env (see .env.example)")


def main() -> None:
    reddit = client()
    reddit.read_only = True
    OUT.parent.mkdir(exist_ok=True)
    seen: dict[str, dict] = {}

    for sub in config.SUBREDDITS:
        for label, query in config.QUERIES:
            print(f"r/{sub} [{label}] ...", flush=True)
            results = reddit.subreddit(sub).search(
                query, sort="relevance", time_filter=config.TIME_FILTER,
                limit=config.POSTS_PER_QUERY,
            )
            for p in results:
                rec = seen.get(p.id)
                if rec:
                    rec["matched"].append(label)
                    continue
                p.comment_sort = "top"
                p.comments.replace_more(limit=0)
                comments = [c.body for c in p.comments[: config.COMMENTS_PER_POST]]
                seen[p.id] = {
                    "id": p.id,
                    "subreddit": sub,
                    "title": p.title,
                    "body": p.selftext,
                    "score": p.score,
                    "num_comments": p.num_comments,
                    "created_utc": p.created_utc,
                    "url": f"https://reddit.com{p.permalink}",
                    "comments": comments,
                    "matched": [label],
                }

    with OUT.open("w", encoding="utf-8") as f:
        for rec in seen.values():
            f.write(json.dumps(rec, ensure_ascii=False) + "\n")
    print(f"Saved {len(seen)} unique posts -> {OUT}")


if __name__ == "__main__":
    main()
