import { NowRequest, NowResponse } from "@vercel/node";

export default async (req: NowRequest, res: NowResponse) => {
  let data = await fetch(
    `https://shopee.ph/api/v2/search_items/?by=relevancy&keyword=fleshlight&limit=50&newest=0&order=desc`,
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "if-none-match-": "55b03-28973ef21cfd832b5433b48bb7d49c51",
      },
    }
  ).then((res) => res.json());
  console.log({ data });
  res.json({ data: data.items });
};
