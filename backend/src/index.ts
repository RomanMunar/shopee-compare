import express, { query } from "express";
import fetch from "node-fetch";
import { URLSearchParams } from "url";
import {
  ItemDetailed,
  Message,
  Rating,
  SearchResponse,
  SellerLocation,
  Shop,
  ShopeeItemResponse,
  ShopeeRatingResponse,
  ShopeeResponse,
  Sort
} from "./interfaces";

const app = express();

app.use(express.json());

/* 
  ************************************** A BIG ASS NOTE *************************************
  We are not using jwt/cookies mainly because i don't want to require users to login/register
  so, we are storing a unique id on each of the device that the app has been used, this id
  is what we're using to identify them for up/downvotes,and  editing/deleting messages.
  *******************************************************************************************
*/

/* 
  Access: Public,
  Description: Gets all messages
 */
app.get("/messages", async (req, res) => {
  try {
    const data = await fetch(
      "https://forum4shopeecompare-11a9.restdb.io/rest/messages?metafields=true",
      {
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "7ad0b4f0708986a4ebc8b485da9255db075b8"
        }
      }
    ).then((res) => res.json());
    console.log({ data });
    res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  }
});

/* 
  Access: Private,
  Description: Upvotes/Downvotes a message through method
 */
app.post("/messages/:messageId/:method/:user", async (req, res) => {
  const { messageId, method, user } = req.params;
  if (!user) {
    return res
      .status(400)
      .json({ error: true, message: "Bad request, must have a userid" });
  }
  if (!messageId) {
    return res
      .status(400)
      .json({ error: true, message: "Bad request, must have a messageid" });
  }
  if (!method) {
    return res
      .status(400)
      .json({ error: true, message: "Bad request, must have a method" });
  }
  const messageData = await fetch(
    `https://forum4shopeecompare-11a9.restdb.io/rest/messages/${messageId}`,
    {
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "x-apikey": "7ad0b4f0708986a4ebc8b485da9255db075b8"
      }
    }
  ).then((resp) =>
    resp.ok
      ? resp.json()
      : res
          .status(404)
          .json({ error: true, message: "Message does not exist at all" })
  );
  switch (method) {
    case "downvote":
      messageData.downvote = messageData.downvote + `,${user}`;
      break;
    case "upvote":
      messageData.upvote = messageData.upvote + `,${user}`;
      break;
    default:
      break;
  }
  const data = await fetch(
    `https://forum4shopeecompare-11a9.restdb.io/rest/messages/${messageId}`,
    {
      body: JSON.stringify(messageData),
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "x-apikey": "7ad0b4f0708986a4ebc8b485da9255db075b8"
      }
    }
  ).then((res) => res.json());
  res.status(200).json({ data });
});

/* 
  Access: Private,
  Description: Upvotes/Downvotes a message through method
 */
app.delete("/messages/:messageId/user/:user", async (req, res) => {
  const { messageId, user } = req.params;
  if (!user) {
    return res
      .status(400)
      .json({ error: true, message: "Bad request, must have a userid" });
  }
  if (!messageId) {
    return res
      .status(400)
      .json({ error: true, message: "Bad request, must have a messageid" });
  }
  const messageData = await fetch(
    `https://forum4shopeecompare-11a9.restdb.io/rest/messages/${messageId}`,
    {
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "x-apikey": "7ad0b4f0708986a4ebc8b485da9255db075b8"
      }
    }
  ).then((resp) =>
    resp.ok
      ? resp.json()
      : res
          .status(404)
          .json({ error: true, message: "Message does not exist at all" })
  );
  if (messageData.userId !== parseInt(user)) {
    console.log({ userId: messageData.userId, user });
    return res.status(400).json({
      error: true,
      message: "Bad request, can't delete messages that are not yours"
    });
  }
  messageData.removed = true;
  const data = await fetch(
    `https://forum4shopeecompare-11a9.restdb.io/rest/messages/${messageId}`,
    {
      body: JSON.stringify(messageData),
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "x-apikey": "7ad0b4f0708986a4ebc8b485da9255db075b8"
      }
    }
  ).then((res) => res.json());
  res.status(200).json({ data });
});

/* 
  Access: Private,
  Description: Create a message
 */
app.post("/messages", async (req, res) => {
  const { type, message, userId, title, authorName } = req.body as Message;
  if (!type) {
    return res
      .status(400)
      .json({ error: true, message: "Must include a type" });
  }
  if (!message) {
    return res
      .status(400)
      .json({ error: true, message: "Must include a message" });
  }
  const messageData = {
    type,
    message,
    userId,
    title,
    authorName,
    removed: false,
    upvote: [],
    downvote: [],
    createdAt: null,
    updatedAt: null,
    reply: null
  };

  try {
    const data = await fetch(
      "https://forum4shopeecompare-11a9.restdb.io/rest/messages",
      {
        body: JSON.stringify(messageData),
        method: "POST",
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "x-apikey": "7ad0b4f0708986a4ebc8b485da9255db075b8"
        }
      }
    ).then((res) => res.json());
    res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  }
});

app.get("/search", async (req, res) => {
  // Already validated query from the client side,
  // but feel free to submit a pr, for revalidating these queries :)
  const query = req.query as {
    by: Sort;
    keyword: string;
    limit: string;
    locations: SellerLocation;
    newest: string;
    minPrice: string;
    maxPrice: string;
    order: string;
  };

  const params = new URLSearchParams(query);

  try {
    const data: SearchResponse = await fetch(
      `https://shopee.ph/api/v2/search_items/?${params.toString()}&page_type=search&skip_autocorrect=1&version=2`,
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "if-none-match-": "55b03-28973ef21cfd832b5433b48bb7d49c51"
        }
      }
    ).then((res) => res.json());

    if (data.items === null) {
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
        rcount_with_image: item.item_rating.rcount_with_image
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
          options: tier.options
        };
      }),
      liked_count: item.liked_count,
      is_adult: item.is_adult,
      raw_discount: item.raw_discount
    }));

    res.status(200).json({
      error,
      error_msg,
      newItems
    });
  } catch (e) {
    console.error("Engk! " + e.message);
    res.status(500).send("Error");
  }
});

// https://shopee.ph/api/v2/item/get?itemid=2625791160&shopid=168042480
app.get("/item/get", async (req, res) => {
  const { itemid, shopid } = req.query;
  if (!itemid || !shopid) {
    return res
      .status(400)
      .json({ error: true, message: "Must have shop and item ids" });
  }

  // we didn't used urlSearchParams here because, we only have two required queries.
  try {
    const response: ShopeeItemResponse<ItemDetailed> = await fetch(
      `https://shopee.ph/api/v2/item/get?itemid=${itemid}&shopid=${shopid}`
    ).then((res) => res.json());

    const { item, error, error_msg } = response;

    const newData = {
      itemid: item.itemid,
      description: item.description,
      brand: item.brand,
      name: item.name,
      image: item.image,
      images: item.images,
      item_rating: {
        rating_count: item.item_rating.rating_count,
        rating_star: item.item_rating.rating_star,
        rcount_with_context: item.item_rating.rcount_with_context,
        rcount_with_image: item.item_rating.rcount_with_image
      },
      price_min: item.price_min,
      price_max: item.price_max,
      price: item.price,
      sold: item.sold,
      historical_sold: item.historical_sold,
      shopee_verified: item.shopee_verified,
      shop_location: item.shop_location,
      tier_variations: item.tier_variations,
      models: item.models.map((m) => {
        return {
          price: m.price,
          tier_index: m.tier_index,
          name: m.name,
          stock: m.stock,
          sold: m.sold
        };
      })
    };

    res.status(200).json({ data: newData, error, error_msg });
  } catch (e) {
    console.error("Engk! " + e.message);
    res.status(500).send("Error");
  }
});

//https://shopee.ph/api/v2/shop/get?is_brief=1&shopid=194193277
app.get("/shop/get", async (req, res) => {
  const { shopid } = req.query;
  try {
    const response: ShopeeResponse<Shop> = await fetch(
      `https://shopee.ph/api/v2/shop/get?is_brief=1&shopid=${shopid}`
    ).then((res) => res.json());
    const { data, error, error_msg } = response;
    const newData = {
      account: {
        portrait: data.account.portrait,
        total_avg_star: data.account.total_avg_star
      },
      name: data.name,
      follower_count: data.follower_count,
      response_rate: data.response_rate,
      response_time: data.response_time,
      last_active_time: data.last_active_time
    };

    res.status(200).json({ data: newData, error, error_msg });
  } catch (e) {
    console.error("Engk! " + e.message);
    res.status(500).send("Error");
  }
});

//https://shopee.ph/api/v2/item/get_ratings?filter=0&flag=1&itemid=${itemid}&shopid=${shopid}
//https://shopee.ph/api/v2/item/get_ratings?filter=0&flag=1&itemid=1840601784&shopid=119577304
app.get("/item/get_ratings", async (req, res) => {
  const query = req.query as {
    itemid: string;
    shopid: SellerLocation;
    offset: string;
    type: string;
    filter: string;
  };
  // &type=0 All
  // &type=5 5 stars only
  // &type=5 4 stars only
  //  ...
  // &filter=3 With Media
  // &filter=1 With Comments
  const params = new URLSearchParams(query);
  console.log(query);
  try {
    const response: ShopeeRatingResponse<Rating[]> = await fetch(
      `https://shopee.ph/api/v2/item/get_ratings?flag=1&${params.toString()}`
    ).then((res) => res.json());

    const { data, error, error_msg } = response;

    const newData = data.ratings.map((rating) => {
      return {
        anonymous: rating.anonymous,
        author_portrait: rating.author_portrait,
        author_username: rating.author_username,
        comment: rating.comment,
        images: rating.images,
        rating_star: rating.rating_star,
        product_items: rating.product_items,
        tags: rating.tags
      };
    });

    res.status(200).json({ data: newData, error, error_msg });
  } catch (e) {
    console.error("Engk! " + e.message);
    res.status(500).send("Error");
  }
});

app.listen(5000, () => console.log("👋👋👋 hi from port 5000"));
