from time import sleep
from bs4 import BeautifulSoup
import requests, re

def get_contact_info(url):
    sleep(0.1)
    source = requests.get(url, headers = {
    "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3538.102 Safari/537.36 Edge/18.19582"
})
    print("parsing..." + url)
    
    soup = BeautifulSoup(source.text, "html.parser")

    match_phone = re.findall(r'((?:\+\d{2}[-\.\s]??|\d{4}[-\.\s]??)?(?:\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4}))', str(soup))
    phone = ''.join(match_phone)

    match_email = re.findall(r'[\w\.-]+@[\w\.-]+\.\w+', str(soup))
    email = ''.join(match_email)

    if(len(match_email) == 0):
        try:
            source = requests.get(url+"/contact", headers = {
            "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3538.102 Safari/537.36 Edge/18.19582"
        })
           
            
            soup = BeautifulSoup(source.text, "html.parser")

            match_email = re.findall(r'[\w\.-]+@[\w\.-]+\.\w+', str(soup))
            email = ''.join(match_email)
        except: pass

    if(len(match_phone) == 0):
            try:
                    source = requests.get(url+"/contact", headers = {
                    "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3538.102 Safari/537.36 Edge/18.19582"
                })
                
                    
                    soup = BeautifulSoup(source.text, "html.parser")

                    match_phone = re.findall(r'((?:\+\d{2}[-\.\s]??|\d{4}[-\.\s]??)?(?:\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4}))', str(soup))
                    phone = ''.join(match_phone)
            
            except: pass

    for phone_no in match_phone:
        if(not validNumber(phone_no)):
            match_phone.remove(phone_no)

    data = {"email":match_email, "phone": match_phone}
   
    return data

def validNumber(phone_nuber):
    pattern = re.compile("^[\dA-Z]{3}-[\dA-Z]{3}-[\dA-Z]{4}$", re.IGNORECASE)
    return pattern.match(phone_nuber)
