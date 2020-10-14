Search   
"https://shopee.ph/api/v2/search_items/?by=relevancy&keyword=ssd&limit=50&newest=0&order=desc&page_type=search&version=2"  
  i name  
  i price  
  i sold  
  i id  
  
Item   
https://shopee.ph/api/v2/item/get?itemid=6643760845&shopid=73467985  
  brand  
  name  
  images  
  sold  
  description  
  if tier?  
    model  
      item[0] price  
  :el price  
    
Ratings  https://shopee.ph/api/v2/item/get_ratings?filter=0&flag=1&itemid=6643760845&limit=6&offset=0&shopid=73467985&type=0  
  i r summary  
    r total  
    ave r 1*r[0]+1*r[2]+...  
  i author_comment  
    author_username  
    images  
    rating star  
    tags   
      tag_description  
