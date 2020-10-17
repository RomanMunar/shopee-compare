import express, { Response } from "express";
import fetch from "node-fetch";
import { Item, SearchResponse } from "./interfaces";
const app = express();

app.use(express.json());

app.get("/:keyword", async (req, res) => {
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
      itemid: item.itemid,
      name: item.name,
      adsid: item.adsid,
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
      location: item.location,
      tier_variations: item.tier_variations,
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
    const data: Response<Item> = await fetch(
      "https://shopee.ph/api/v2/item/get?itemid=6643760845&shopid=73467985",
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "if-none-match-": "55b03-28973ef21cfd832b5433b48bb7d49c51",
        },
      }
    ).then((res) => res.json());

    res.status(200).json({ data });
  } catch (e) {
    console.error("Engk! " + e.message);
    res.status(500).send("Error");
  }
});

app.listen(5000, () => console.log("👋👋👋 hi from port 5000"));
