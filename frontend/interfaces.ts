export type Model = {
  price: number;
  name: string;
  tier_index: [number, number];
  stock: number;
  sold: number;
};
export type UserID = number;
export type Message = {
  type: "bug" | "suggestion" | "question";
  message: string;
  removed: boolean;
  upvote: UserID[];
  downvote: UserID[];
  createdAt: number;
  updatedAt: number | null;
  userId: UserID;
  title?: string;
  authorName?: string;
  reply?: string;
};

export type SellerLocation =
  | "Metro Manila"
  | "South Luzon"
  | "North Luzon"
  | "Visayas"
  | "Mindanao"
  | "-2";
export type Sort = "relevancy" | "price" | "latest" | "sales";

export interface SearchItem extends Item {
  adsid: number | null;
}

export type ItemRating = {
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
  account: { portrait: string; total_avg_star: number };
  name: string;
  follower_count: number;
  response_rate: number;
  response_time: number;
  last_active_time: number;
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
  brand: string | null;
}

export interface ItemDetailed extends Item {
  historical_sold: number;
  description: string;
  models: Model[];
}

export interface ShopeeResponse<T> {
  data: T;
  error: number;
  error_msg: string | null;
}

export interface ShopeeRatingResponse<T> {
  data: {
    item: any;
    ratings: T;
  };
  error: number;
  error_msg: string | null;
}

export interface ShopeeItemResponse<T> {
  data: any;
  error: number;
  error_msg: string | null;
  item: T;
}

export interface SearchResponse {
  error: number | string | null;
  error_msg: string | null;
  items: SearchItem[];
}

export interface Rating {
  anonymous: boolean;
  author_portrait: string;
  author_username: string;
  comment: string;
  images: string[];
  rating_star: number;
  product_items: { modelname: string };
  tags: [{ description: string }];
}
