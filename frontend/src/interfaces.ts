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
  adsid: number;
}

type ItemRating = {
  rating_star: number;
  rating_count: number;
  rcount_with_context: number;
  rcount_with_image: number;
};

type Tier = {
  images: string[];
  name: string;
  options: string[];
};
// tier = map i => {i.name i.images i.options}
// price_max == p_min ? return price : [min, max]  :string

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
  brand: string;
  historical_sold: number;
  image: string;
  images: string;
  item_rating: ItemRating;
  itemid: number;
  liked_count: number;
  location: string;
  name: string;
  price_max: number;
  price_min: number;
  price: number;
  shopee_verified: boolean;
  shopid: number;
  sold: number;
  tier_variations: Tier[];
}

export interface ItemDetailed extends Item {
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

// price_max == p_min ? return price : [min, max] :string
// if tier_variation:string
// :el pric:string

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
