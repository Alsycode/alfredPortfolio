# Landlord idea miner

Pulls posts from r/Landlord, r/propertymanagement and r/realestateinvesting through the
official Reddit API, scores them for pain and willingness to pay, and optionally clusters
the best ones into product ideas with Claude.

## Setup

1. Create a "script" app at https://www.reddit.com/prefs/apps (redirect URI `http://localhost`).
2. `copy .env.example .env` and fill in the client ID (under the app name) and secret.
3. `pip install -r requirements.txt`

## Run

```bash
python fetch.py     # -> data/posts.jsonl
python score.py     # -> data/scored.csv (ranked)
python cluster.py   # -> data/ideas.md (needs ANTHROPIC_API_KEY)
python competitors.py  # -> data/competitors.json/.csv (no Reddit keys needed)
```

`competitors.py` uses Scrapling to read public competitor pricing pages (list in
`config.COMPETITORS`), respecting robots.txt. Pages that disallow bots are skipped and
reported. Review sites like G2 and Capterra are deliberately not scraped; read the 1-3 star
reviews by hand.

Edit `config.py` to change subreddits, queries, or scoring keywords. Output in `data/`
and `.env` are git-ignored.
