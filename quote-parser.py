import requests as rq
from bs4 import BeautifulSoup as soup
import json

request = rq.get("https://pakwired.com/100-best-quotes-time/")
parser = soup(request.text, 'html.parser')

quotes_raw = parser.find_all("blockquote")
quotes = []
fin = {}

for quote in quotes_raw:
    quotes.append(
        {"quote": quote.find("p").text,
         "author": quote.find("cite").text}
        )

fin["data"] = quotes


with open('quotes.json', 'w') as fp:
    quotes = json.dumps(fin)
    json.dump(fin, fp)
    
