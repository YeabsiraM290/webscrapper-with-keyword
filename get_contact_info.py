from cgitb import text
from bs4 import BeautifulSoup
import requests

def get_contact_info(url):
    locale_cookie = {"STYXKEY_region": "WORLD.en.Europe/Amsterdam"}
    source = requests.get(url, cookies=locale_cookie)
    print("parsing..." + url)
    
    soup = BeautifulSoup(source.text, "html.parser")
   
    email = list(soup.find_all(text="email"))
    phone = list(soup.find_all(text="Phone:"))
   
    return {"email:":email, "phone": phone}