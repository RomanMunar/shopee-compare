export interface Response<T> {
  data: T;
  error: number;
  error_msg: string | null;
}

export interface SearchResponse {
  error: number | string | null;
  error_msg: string | null;
  items: [
    {
      itemid: number;
      name: string;
      adsid: number;
      image: string;
      images: string[];
      item_rating: {
        rating_star: number;
        rating_count: number;
        rcount_with_context: number;
        rcount_with_image: number;
      };
      price_min: number;
      price_max: number;
      price: number;
      sold: number;
      shopee_verified: boolean;
      shopid: number;
      location: string;
      tier_variations: Tier[];
    }
  ];
}
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
  name: string;
  image: string;
  images: string;
  liked_count: number;
  historical_sold: number;
  sold: number;
  description: string;
  item_rating: number;
  rating_star: number;
  rating_count: number;
  rcount_with_context: number;
  rcount_with_image: number;
  tier_variation: [
    {
      images: [string];
      name: string;
      options: [string];
    }
  ];
  model: [
    {
      price: string;
      image: string;
      name: string;
      extinf: string;
      tier_index: string;
    }
  ];
  options: string;
  price_min: string;
  price_max: string;
  price: string;
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
