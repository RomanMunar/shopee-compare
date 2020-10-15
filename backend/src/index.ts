import express from "express";
import fetch from "node-fetch";
const app = express();

app.get("/", async (req, res) => {
  try {
    const data = await fetch(
      "https://shopee.ph/api/v2/search_items/?by=relevancy&keyword=ssd&limit=50&newest=0&order=desc&page_type=search&version=2"
    ).then((res) => res.json());
    
    res.status(200).json({ data });
  } catch (e) {
    console.error("Engk! " + e.message);
    res.status(500).send("Error");
  }
});

app.listen(5000, () => console.log("👋👋👋 hi from port 5000"));
