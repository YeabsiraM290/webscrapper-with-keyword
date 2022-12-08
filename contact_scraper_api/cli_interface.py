from url_generator import get_url
from get_contact_info import get_contact_info

def run():
    urls  = get_url("plastic bottle manufacturing companies", 10)
    count = 1
    for url in urls:

        try:
            name = url.split(".")[1]
            contact_info = get_contact_info(url)
            print_info(url, name, contact_info, count)
            count+=1
        except Exception as e:
            print(e)
            print("Parsing \t" + url + "\t failed \n\n")
            pass
 
    return 


def print_info(url, name, contact_info, index):
    print("*" * 50 + "\t" +  str(index) + "\t" + "*" * 50)
    print("URL:" + url + "\n")
    print("Name:" + name + "\n")
    print("Contact information: \n" )
    print(contact_info)
    print()
    print("*" * 100)

try:
    run()
except Exception  as e:
    print(e)
    print("Connection problem... trying again")