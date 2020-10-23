import express from "express";
import fetch from "node-fetch";
import {
  ItemDetailed,
  Rating,
  SearchResponse,
  Shop,
  ShopeeResponse,
} from "./interfaces";
const app = express();

app.use(express.json());

app.get("/search/:keyword", async (req, res) => {
  try {
    const keyword = req.params.keyword;

    const data: SearchResponse = await fetch(
      `https://shopee.ph/api/v2/search_items/?by=relevancy&keyword=${keyword}&limit=50&newest=0&order=desc`,
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "if-none-match-": "55b03-28973ef21cfd832b5433b48bb7d49c51",
        },
      }
    ).then((res) => res.json());

    if (!data || data === null) {
      return res.status(400).json({ error_msg: "No Data found" });
    }

    const { error, error_msg, items } = data;
    const newItems = items.map((item) => ({
      has_lowest_price_guarantee: item.has_lowest_price_guarantee,
      itemid: item.itemid,
      name: item.name,
      adsid: item.adsid,
      brand: item.brand,
      image: item.image,
      images: item.images,
      item_rating: {
        rating_count: item.item_rating.rating_count,
        rating_star: item.item_rating.rating_star,
        rcount_with_context: item.item_rating.rcount_with_context,
        rcount_with_image: item.item_rating.rcount_with_image,
      },
      price_min: item.price_min,
      price_max: item.price_max,
      price: item.price,
      sold: item.sold,
      shopee_verified: item.shopee_verified,
      shopid: item.shopid,
      shop_location: item.shop_location,
      tier_variations: item.tier_variations.map((tier) => {
        return {
          images: tier.images,
          name: tier.name,
          options: tier.options,
        };
      }),
      liked_count: item.liked_count,
      is_adult: item.is_adult,
      raw_discount: item.raw_discount,
    }));

    res.status(200).json({
      error,
      error_msg,
      newItems,
    });
  } catch (e) {
    console.error("Engk! " + e.message);
    res.status(500).send("Error");
  }
});

app.get("/item/:itemid/shop/:shopid", async (req, res) => {
  const { itemid, shopid } = req.params;
  console.log({ itemid, shopid });
  try {
    const response: ShopeeResponse<ItemDetailed> = await fetch(
      "https://shopee.ph/api/v2/item/get_ratings?filter=0&flag=1&itemid=6643760845&limit=6&offset=0&shopid=73467985",
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "if-none-match-": "55b03-28973ef21cfd832b5433b48bb7d49c51",
        },
      }
    ).then((res) => res.json());

    const { data, error, error_msg } = response;

    const newData = {
      itemid: data.itemid,
      brand: data.brand,
      name: data.name,
      image: data.image,
      images: data.images,
      item_rating: {
        rating_count: data.item_rating.rating_count,
        rating_star: data.item_rating.rating_star,
        rcount_with_context: data.item_rating.rcount_with_context,
        rcount_with_image: data.item_rating.rcount_with_image,
      },
      price_min: data.price_min,
      price_max: data.price_max,
      price: data.price,
      sold: data.sold,
      shopee_verified: data.shopee_verified,
      shop_location: data.shop_location,
      tier_variations: data.tier_variations,
    };

    res.status(200).json({ data: newData, error, error_msg });
  } catch (e) {
    console.error("Engk! " + e.message);
    res.status(500).send("Error");
  }
});

app.get("/shop/:shopid", async (req, res) => {
  const { shopid } = req.params;
  console.log({ shopid });
  try {
    const response: ShopeeResponse<Shop> = await fetch(
      "https://shopee.ph/api/v2/shop/get?is_brief=1&shopid=194193277"
    ).then((res) => res.json());
    const { data, error, error_msg } = response;
    const newData = {
      data: data.data,
      account: data.account,
      total_avg_star: data.total_avg_star,
      portrait: data.portrait,
      name: data.name,
      follower_count: data.follower_count,
      response_rate: data.response_rate,
    };
    res.status(200).json({ data: newData, error, error_msg });
  } catch (e) {
    console.error("Engk! " + e.message);
    res.status(500).send("Error");
  }
});

app.get("/ratings/:itemid/shop/:shopid", async (req, res) => {
  const { itemid, shopid } = req.params;
  console.log({ itemid, shopid });
  try {
    const response: ShopeeResponse<Rating> = await fetch(
      "https://shopee.ph/api/v2/item/get_ratings?filter=0&flag=1&itemid=6643760845&limit=6&offset=0&shopid=73467985",
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "if-none-match-": "55b03-28973ef21cfd832b5433b48bb7d49c51",
        },
      }
    ).then((res) => res.json());

    const { data, error, error_msg } = response;

    const newData = {
      anonymous: data.anonymous,
      author_portrait: data.author_portrait,
      author_username: data.author_username,
      comment: data.comment,
      images: data.images,
      rating_star: data.rating_star,
      product_items: data.product_items,
      tags: data.tags,
    };

    res.status(200).json({ data: newData, error, error_msg });
  } catch (e) {
    console.error("Engk! " + e.message);
    res.status(500).send("Error");
  }
});

app.listen(5000, () => console.log("👋👋👋 hi from port 5000"));
