import requests as rq
from bs4 import BeautifulSoup as soup
import json

request = rq.get("https://pakwired.com/100-best-quotes-time/")
parser = soup(request.text)

quotes_raw = parser.find_all("blockquote")
quotes = []

for quote in quotes_raw:
    quotes.append(
        {"quote": quote.find("p").text.split(".")[1],
         "author": quote.find("cite").text}
        )



with open('quotes.json', 'w') as fp:
    quotes = json.dumps(quotes)
    json.dump(quotes, fp)
    
