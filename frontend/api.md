curl 'https://shopee.ph/api/v2/search_items/?by=relevancy&keyword=headphones&limit=50&newest=0&order=desc&page_type=search&version=2' \
  -H 'authority: shopee.ph' \
  -H 'pragma: no-cache' \
  -H 'cache-control: no-cache' \
  -H 'x-shopee-language: en' \
  -H 'x-requested-with: XMLHttpRequest' \
  -H 'if-none-match-: 55b03-28973ef21cfd832b5433b48bb7d49c51' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36' \
  -H 'x-api-source: pc' \
  -H 'accept: */*' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://shopee.ph/search?keyword=headphones' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'cookie: SPC_IA=-1; SPC_F=pqPxqGlbL89uAa8KmQuEOmWPYyyJ4lv8; REC_T_ID=ca5d98f6-f048-11ea-b4d7-b496914cd760; csrftoken=8dhdIbkckp23DeKkQt0bVw8Ckk9KoFw3; welcomePkgShown=true; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; SPC_EC=-; SPC_U=-; SPC_SI=mall.6QOgBO9dRuamEkLfVvmyqHtT6uoS82xF; SPC_CT_ab801bde="1602923727.+brI5SMnxx1ZDE7SltP/QvCkjgxa4d8KgNAveUinEGU="; SPC_CT_1d23883d="1602923799.ZdXH7VRLmNpEqZvrjlI3gSr8aHqVe5D8FOF7CBJH/Ho="; SPC_CT_255806a3="1602923813.N4hlIBauYXJTarKzwYAwTCKjd4mlxkdm8ExQ6qGm/ls="; SPC_CT_40143ce3="1602923845.tqAvfezd3K87nrmMpPjJFUYDdXEeBPNKcJRNhj6SCUc="; SPC_CT_065f3410="1602923858.jRGsj1OZYHulOwD1cXnKMEAISi9Ecap3TS0J1Lcl0MI="; SPC_CT_1062c84a="1602923887.S77P7OilP0EO6/v7/b4722I6aadxgjY9NBtpMUgLf/o="; SPC_CT_db0a054b="1602923907.r5/LOt5m6W55d1Exi4x9Bi33Uxd7bBXG0hu0mBcXvPw="; SPC_CT_aa241cd8="1602923918.v0qD2d1O7t1hoEuv8KGCt4DIUua07C1Am5iglet+qEo="; SPC_CT_a9d6bf3d="1602923925.3dAMliXcmCb3ouf7XQay7r+BzJaYDnyqf7r5gQr4N9s="; REC_MD_41_1000041=1602923969_0_50_0_49; SPC_R_T_ID="wjXPhldm6KKooImK5ZiN74wMy9hCsRuNVHLtbWLubLf9JyxXj3Cvypj0lDICKP/lljjCQWMwHwxIEjW90Vh+k0WdzjVuhg8raommKgQ3/18="; SPC_T_IV="RfKhOVhweuRnTKcM2vm4kg=="; SPC_R_T_IV="RfKhOVhweuRnTKcM2vm4kg=="; SPC_T_ID="wjXPhldm6KKooImK5ZiN74wMy9hCsRuNVHLtbWLubLf9JyxXj3Cvypj0lDICKP/lljjCQWMwHwxIEjW90Vh+k0WdzjVuhg8raommKgQ3/18="' \
  --compressed

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