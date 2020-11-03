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

export interface SearchItem extends Item {
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
  account: { portrait: string; total_avg_star: number };
  name: string;
  follower_count: number;
  response_rate: number;
  response_time: number;
}

export interface Item {
  has_lowest_price_guarantee: boolean;
  is_adult: boolean;
  image: string;
  images: string[];
  item_rating: ItemRating;
  itemid: number;
  raw_discount: number;
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

export type Layout = "main" | "double" | "none";

export type List = {
  set: React.Dispatch<React.SetStateAction<SearchItem[]>>;
  items: SearchItem[];
  id: string;
};

export type IconType =
  | "MainLayout"
  | "DoubleLayout"
  | "Column"
  | "Speed"
  | "Time"
  | "Calendar"
  | "ArrowLeftC"
  | "ArrowRightC"
  | "ArrowCircleLeft"
  | "ArrowCircleRight"
  | "Star"
  | "Grid"
  | "Search"
  | "Bookmark"
  | "Help"
  | "Setting"
  | "SearchBar"
  | "Checkmark"
  | "Like"
  | "ExpandLeft"
  | "ExpandRight"
  | "Fire"
  | "LowPrice"
  | "Discount"
  | "LowStarsCount"
  | "PriceLow"
  | "Plus"
  | "Close"
  | "ChevronDown"
  | "Pdf"
  | "Sort";
