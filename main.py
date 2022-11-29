from url_generator import get_url
from get_contact_info import get_contact_info

def run():
    urls  = get_url("plastic bottle manufacturer", 3)
    for url in urls:

        name = url.split(".")[1]
        contact_info = get_contact_info(url)
        print_info(url, name, contact_info)
 
    return 

def print_info(url, name, contact_info):
    print("*" * 20)
    print("URL:" + url + "\n")
    print("Name:" + name + "\n")
    print("Contact information: \n" )
    print(contact_info)
    print()
    print("*" * 20)

try:
    run()
except Exception  as e:
    print(e)
    print("Connection problem... trying again")