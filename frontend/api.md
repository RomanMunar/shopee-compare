Search   
"https://shopee.ph/api/v2/search_items/?by=relevancy&keyword=ssd&limit=50&newest=0&order=desc&page_type=search&version=2"  
items
  id  
  adsid check for null
  name
  image
  images
  item_rating
    rating_star
    rating_count
    rcount_with_context with message
    rcount_with_iamge
  price_min 
  price_max == p_min ? return price : [min, max]
  price
  sold
  shopee_verified
  location
  tier_variations
    tier = map i => {i.name i.images i.options}

  
Shop
https://shopee.ph/api/v2/shop/get?is_brief=1&shopid=194193277
  data
    account
      total_avg_star
      portrait
    name
    follower_count
    response_rate
  
Item   
https://shopee.ph/api/v2/item/get?itemid=6643760845&shopid=73467985  
item
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
