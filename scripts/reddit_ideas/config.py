SUBREDDITS = ["Landlord", "propertymanagement", "realestateinvesting"]

# (label, reddit search query). Quoted phrases = exact match.
QUERIES = [
    ("pay", '"I\'d pay for" OR "willing to pay" OR "take my money"'),
    ("tool_ask", '"is there an app" OR "is there a tool" OR "is there software"'),
    ("pain", '"there has to be a better way" OR "so frustrating" OR "I hate having to"'),
    ("sheet", "spreadsheet"),
    ("too_expensive", '"too expensive" OR overpriced OR "raised their prices"'),
    ("alt", "alternative AND (Buildium OR AppFolio OR TurboTenant OR RentRedi OR Avail OR Zillow)"),
]

TIME_FILTER = "year"
POSTS_PER_QUERY = 100
COMMENTS_PER_POST = 15  # top comments kept for context

# Scoring signals applied to post title + body + kept comments (case-insensitive substrings)
PAIN = ["frustrat", "hate", "nightmare", "waste", "hours", "manual", "tedious", "annoying",
        "better way", "wish there", "no good", "can't find", "struggl"]
PAY = ["i'd pay", "i would pay", "willing to pay", "take my money", "per month", "/month",
       "subscription", "$", "too expensive", "overpriced", "worth paying"]
TOOLS = ["buildium", "appfolio", "turbotenant", "rentredi", "avail", "zillow rental",
         "cozy", "innago", "doorloop", "hemlane", "stessa", "quickbooks", "excel",
         "spreadsheet", "google sheets"]
RECURRING = ["every month", "monthly", "each month", "every week", "weekly", "each tenant",
             "every tenant", "turnover", "rent collection", "late rent", "tax time"]

# Competitor pricing pages (public marketing pages only; robots.txt is respected).
COMPETITORS = {
    "Buildium": "https://www.buildium.com/pricing/",
    "AppFolio": "https://www.appfolio.com/pricing",
    "TurboTenant": "https://www.turbotenant.com/pricing/",
    "RentRedi": "https://www.rentredi.com/pricing",
    "Avail": "https://www.avail.co/pricing",
    "Innago": "https://innago.com/pricing/",
    "DoorLoop": "https://www.doorloop.com/pricing",
    "Hemlane": "https://www.hemlane.com/pricing/",
}
