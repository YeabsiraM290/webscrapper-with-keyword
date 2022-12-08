from url_generator import get_url
from get_contact_info import get_contact_info

def scrap(keyterm, amount):
    urls  = get_url(keyterm, amount)
    data = {"results":[]}
    for url in urls:
        
        try:
            name = url.split(".")[1]
            contact_info = get_contact_info(url)
            
            site_data = {"name":name,"url":url,"emails":contact_info["email"],"phones":contact_info["phone"]}

            data["results"].append(site_data)
    
        except Exception as e:
            return e
            
        
    return data
 