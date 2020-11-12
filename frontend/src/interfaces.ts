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
  anonymous: boolean;
  author_portrait: string;
  author_username: string;
  comment: string;
  images: null | string[];
  rating_star: number;
  product_items: any[];
  tags: null | [{ tag_description: string }];
}

export type Layout = "main" | "double" | "none";

export type List = {
  setItems: React.Dispatch<React.SetStateAction<ListItem<SearchItem>[]>>;
  items: ListItem<SearchItem>[];
  id: string;
};

export type ListItem<T> = {
  item: T;
  itemid: number;
};

export type BookMark = {
  id: number;
  pinned: boolean;
  items: SearchItem[];
  title: string;
  description: string;
};

export type IconType =
  | "Swap"
  | "Question"
  | "Clipboard"
  | "Link"
  | "Delete"
  | "Product"
  | "Price"
  | "Sales"
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
