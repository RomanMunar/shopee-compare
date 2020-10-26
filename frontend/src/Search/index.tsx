import React, { ReactElement, useState } from "react";
import { SearchItem } from "../interfaces";
import { useQueryParams } from "../shared/hooks/useQueryParams";
import Searchbar from "./Searchbar";
import Results from "./Results";
import { Label, SearchPanel } from "./Styles";
import Toolbar from "./Toolbar";
import Compare from "./Compare/index";
import Container from "../components/Container";

export default (): ReactElement => {
  let query = useQueryParams().get("keyword");
  const [results] = useState<SearchItem[]>([
    {
      raw_discount: 22,
      has_lowest_price_guarantee: true,
      is_adult: true,
      itemid: 6539310796,
      name:
        "【Noise Cancelling Microphone&Headphone】New Upgrade online class headset noise cancellation mic with Dual 3.5mm port and built-in noise reduction headphones",
      adsid: 1423743,
      brand: "No Brand",
      image: "c64b792e4163a401233d483d6fe55efa",
      images: [
        "c64b792e4163a401233d483d6fe55efa",
        "d99f8b6b86a20557aa12876404ecf4c2",
        "c7de1b9bd3688d6647ed704e3d75bb44",
        "1100512d6bf48f1360801fd04a23c87a",
        "c9cd90eb2e846c2953816eeff5550c5f",
        "aff4a7ea8b9d11cb228b8dae5d577371",
        "c2cbe8b4fdfe31b5583f1943f2cef992",
        "43097c1f0bf98ce025135eb78b804a86",
        "d3469b08df904e91e17b835561dd90d9",
      ],
      item_rating: {
        rating_count: [10721, 96, 48, 203, 830, 9544],
        rating_star: 4.835977,
        rcount_with_context: 3593,
        rcount_with_image: 2228,
      },
      price_min: 54900000,
      price_max: 549200000,
      price: 54900000,
      sold: 4067,
      shopee_verified: true,
      shopid: 181860033,
      shop_location: "Overseas",
      tier_variations: [
        {
          images: [
            "558ae7630c7207f045febfd7ad92745f",
            "76ca44b377c44b505a3e5c20ed152b2d",
            "28ab2fd9eaba0c7069bbed7074526f29",
            "91aca3db6b3aa56c57f500829ec24d15",
            "2252e4de59d4026fc554051a63d3f106",
            "b576ca60a5da046de54b40e28cac3b41",
          ],
          name: "Type",
          options: [
            "Noise Reduction Mic",
            "Grey（Dual 3.5MM）",
            "Grey（Single 3.5MM)",
            "White(Dual 3.5mm）",
            "Gold(Dual 3.5mm）",
            "Gold（Single 3.5MM）",
          ],
        },
      ],
      liked_count: 7110,
    },
    {
      raw_discount: 22,
      has_lowest_price_guarantee: true,
      is_adult: true,
      itemid: 6539310796,
      name:
        "【Noise Cancelling Microphone&Headphone】New Upgrade online class headset noise cancellation mic with Dual 3.5mm port and built-in noise reduction headphones",
      adsid: 1423743,
      brand: "No Brand",
      image: "c64b792e4163a401233d483d6fe55efa",
      images: [
        "c64b792e4163a401233d483d6fe55efa",
        "d99f8b6b86a20557aa12876404ecf4c2",
        "c7de1b9bd3688d6647ed704e3d75bb44",
        "1100512d6bf48f1360801fd04a23c87a",
        "c9cd90eb2e846c2953816eeff5550c5f",
        "aff4a7ea8b9d11cb228b8dae5d577371",
        "c2cbe8b4fdfe31b5583f1943f2cef992",
        "43097c1f0bf98ce025135eb78b804a86",
        "d3469b08df904e91e17b835561dd90d9",
      ],
      item_rating: {
        rating_count: [10721, 96, 48, 203, 830, 9544],
        rating_star: 4.835977,
        rcount_with_context: 3593,
        rcount_with_image: 2228,
      },
      price_min: 54900000,
      price_max: 549200000,
      price: 54900000,
      sold: 4067,
      shopee_verified: true,
      shopid: 181860033,
      shop_location: "Overseas",
      tier_variations: [
        {
          images: [
            "558ae7630c7207f045febfd7ad92745f",
            "76ca44b377c44b505a3e5c20ed152b2d",
            "28ab2fd9eaba0c7069bbed7074526f29",
            "91aca3db6b3aa56c57f500829ec24d15",
            "2252e4de59d4026fc554051a63d3f106",
            "b576ca60a5da046de54b40e28cac3b41",
          ],
          name: "Type",
          options: [
            "Noise Reduction Mic",
            "Grey（Dual 3.5MM）",
            "Grey（Single 3.5MM)",
            "White(Dual 3.5mm）",
            "Gold(Dual 3.5mm）",
            "Gold（Single 3.5MM）",
          ],
        },
      ],
      liked_count: 7110,
    },
    {
      raw_discount: 22,
      has_lowest_price_guarantee: false,
      is_adult: true,

      itemid: 7452062687,
      name:
        "✅100% Original Smilee Earphone Cat Ear Bluetooth 5.0 LED Adjustable Foldable Headband Headphones #2",
      adsid: 4313752,
      brand: "No Brand",
      image: "176d77d8112a766fc71159b0c493f7fd",
      images: [
        "176d77d8112a766fc71159b0c493f7fd",
        "2ac11a5e9da1a540b80cb2c99d1853ac",
        "82c3f6407c328cabb1c56e17b3c14802",
        "945301aba1f2d6ff32a9621e0d6514df",
        "2f9d736ea01e363b716ec1cbb25c0423",
        "b689263d0bce79b1e4b860e3796f1674",
        "ea9cf9fa8d0d4492a497e79470e96120",
        "2aa7543498a192260a8559fd19f0c0d1",
        "5214f465457502d0e5b0a11117a0d5d9",
      ],
      item_rating: {
        rating_count: [0, 0, 0, 0, 0, 0],
        rating_star: 0,
        rcount_with_context: 0,
        rcount_with_image: 0,
      },
      price_min: 39800000,
      price_max: 39800000,
      price: 39800000,
      sold: 7,
      shopee_verified: false,
      shopid: 69565622,
      shop_location: "San Nicolas, Metro Manila",
      tier_variations: [
        {
          images: [],
          name: "Color",
          options: ["White", "Black", "Khaki", "Pink", "Red", "Purple", "Blue"],
        },
      ],
      liked_count: 26,
    },
    {
      raw_discount: 22,
      has_lowest_price_guarantee: true,
      is_adult: false,
      itemid: 1049341834,
      name: "MDR-XB450AP 102dB Extra Bass Smartphone Headphone",
      adsid: null,
      brand: "No Brand",
      image: "7c41509073012b37dd2e1a792488b807",
      images: [
        "7c41509073012b37dd2e1a792488b807",
        "c002a34cb2230891b9e0551f86c27911",
        "2418fe212a69d9fd5db74e4771257dce",
        "7d012ff1c29995842d2d35202f8b52b2",
        "88970d5b4660dea07d66bb1aadaa4243",
        "f09ad4842c5918bc5395384fb19ec7c8",
        "6e9d18cb8df764116ac1325eb3025156",
      ],
      item_rating: {
        rating_count: [1599, 43, 17, 77, 132, 1330],
        rating_star: 4.68398,
        rcount_with_context: 560,
        rcount_with_image: 314,
      },
      price_min: 12000000,
      price_max: 12000000,
      price: 12000000,
      sold: 1646,
      shopee_verified: false,
      shopid: 51770699,
      shop_location: "Binondo, Metro Manila",
      tier_variations: [
        {
          images: [],
          name: "Variations",
          options: ["black", "yellow", "blue", "red", "White "],
        },
      ],
      liked_count: 1003,
    },
  ]);
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);

  return (
    <Container>
      <Toolbar
        isSearchPanelOpen={isSearchPanelOpen}
        setIsSearchPanelOpen={setIsSearchPanelOpen}
      />
      <SearchPanel isSearchPanelOpen={isSearchPanelOpen}>
        <Searchbar />
        <Label>Search results for "{query}"</Label>
        <Results results={results} />
      </SearchPanel>
      <Compare results={results} />
      {/* 
        CompareContainer{
          items.length ? 
            CompareItem 
              Title, Images, Model, Price...
          :<BlankDashedContainer/>
          }
       */}
    </Container>
  );
};
