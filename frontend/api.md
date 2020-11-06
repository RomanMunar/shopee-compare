Search "/search/:keyword"
Item "/item/:itemid/shop/:shopid"
Shop "/shop/:shopid"
Ratings "/ratings/item/:itemid/shop/:shopid"

Search 
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
    
Ratings
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