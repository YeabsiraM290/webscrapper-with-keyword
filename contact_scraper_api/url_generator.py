from time import sleep
from googlesearch import search
from urllib.parse import urlparse


def get_url(key_term, amount):
    urls = []
    domains = []
    print("Starting...")
    fetched_urls = list(search(key_term, num=amount, start=amount, stop=amount * 2, pause=2))
    
    for index in range(0, amount) :
       
        if(urlparse(fetched_urls[index]).netloc not in domains and urlparse(fetched_urls[index]).netloc != "www.youtube.com"):
            urls.append(fetched_urls[index])
        
        domains.append( urlparse(fetched_urls[index]).netloc)
    if(len(urls) < amount):
        sleep(10)
        fetched_urls = list(search(key_term, num=amount, start=amount*2, stop=amount * 3, pause=2))
    
        for index in range(0, amount - len(urls)) :
        
            if(urlparse(fetched_urls[index]).netloc not in domains and urlparse(fetched_urls[index]).netloc != "www.youtube.com" and fetched_urls[index] not in urls):
                urls.append(fetched_urls[index])
            
            domains.append( urlparse(fetched_urls[index]).netloc)

    print("Getting url done. \n")
    return urls
