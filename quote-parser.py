import requests as rq
from bs4 import BeautifulSoup as soup
import json

request = rq.get("https://pakwired.com/100-best-quotes-time/")
parser = soup(request.text, 'html.parser')

quotes_raw = parser.find_all("blockquote")
quotes = []
json_obj = {}

for quote in quotes_raw:
    quotes.append(
        {"quote": quote.find("p").text,
         "author": quote.find("cite").text}
        )

json_obj["data"] = quotes


with open('quotes.json', 'w') as fp:
    quotes = json.dumps(json_obj)
    json.dump(json_obj, fp)
    
