export interface ShopeeResponse<T> {
  data: T;
  error: number;
  error_msg: string | null;
}

export interface SearchResponse {
  error: number | string | null;
  error_msg: string | null;
  items: SearchItem[];
}

interface SearchItem extends Item {
  adsid: number | null;
}

type ItemRating = {
  rating_star: number;
  rating_count: number[];
  rcount_with_context: number;
  rcount_with_image: number;
};

type Tier = {
  images: string[];
  name: string;
  options: string[];
};

export interface Shop {
  data: string;
  account: string;
  total_avg_star: string;
  portrait: string;
  name: string;
  follower_count: string;
  response_rate: string;
}

export interface Item {
  has_lowest_price_guarantee: boolean;
  raw_discount: number;
  is_adult: boolean;
  image: string;
  images: string[];
  item_rating: ItemRating;
  itemid: number;
  name: string;
  price_max: number;
  price_min: number;
  price: number;
  shop_location: string;
  shopee_verified: boolean;
  shopid: number;
  sold: number;
  tier_variations: Tier[];
  liked_count: number;
  brand: string;
}

export interface ItemDetailed extends Item {
  historical_sold: number;
  description: string;
  model: [
    {
      price: number;
      image: string;
      name: string;
      extinfo: {
        tier_index: [number, number];
      };
    }
  ];
}

export interface Rating {
  anonymous: string;
  author_portrait: string;
  author_username: string;
  comment: string;
  images: string;
  rating_star: number;
  product_items: { modelname: string };
  tags: [{ description: string }];
}
