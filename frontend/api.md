Search   
"https://shopee.ph/api/v2/search_items/?by=relevancy&keyword=ssd&limit=50&newest=0&order=desc&page_type=search&version=2"  
items  
  itemid    
  adsid check for null  
  name  
  image  
  images  
  item_rating  
    rating_star  
    rating_count  
    rcount_with_context with message  
    rcount_with_image  
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
    response_time
    is_shopee_verified
    preparation_time
    rating_bad
    rating_good
    rating_normal
    rating_star
    vacation
  
Item   
https://shopee.ph/api/v2/item/get?itemid=6643760845&shopid=73467985  
item  
  brand  
  name  
  image, images  
  liked_count
  historical_sold  
  sold /month
  description  
  item_rating  
    rating_star  
    rating_count  
    rcount_with_context with message  
    rcount_with_image  
  tier_variations
    [0].images, name, [options]
  if tier_variations
    model 
      [0] price name 
      extinfo
        tier_index
  :el price
  price_min   
  price_max == p_min ? return price : [min, max]  
  price    
    
Ratings  https://shopee.ph/api/v2/item/get_ratings?filter=0&flag=1&itemid=6643760845&limit=6&offset=0&shopid=73467985&type=0  
ratings
  anonymous bool
  author_portrait
  author_username
  comment
  images
  rating_star
? product_items
    model_name
  tags
    .map(tag => description: tag.description)