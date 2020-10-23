import React, { useState, ReactElement } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import { color, font, mixin, shadows } from "../styles";
import { useQuery } from "../useQuery";
import { SearchItem } from "../interfaces";
import { Icon } from "../components/Icon";

export default (): ReactElement => {
  let query = useQuery().get("keyword");
  const [mockSearchResponse] = useState<SearchItem[]>([
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
      itemid: 6539310796,
      name:
        "【Noise Cancelling Microphone&Headphone】New Upgrade online class headset noise cancellation mic with Dual 3.5mm port and built-in noise reduction headphones",
      adsid: null,
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
      price_max: 66900000,
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
  let tags = [
    "laptop",
    "shoes",
    "headphones",
    "fleshlight",
    "bagina candles",
    "100% real dragon",
  ];
  const kFormatter = (num: number) =>
    Math.abs(num) > 999
      ? (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.abs(num);

  const priceCompare = ({
    price,
    price_max,
    price_min,
  }: {
    price: number;
    price_max: number;
    price_min: number;
  }) =>
    price === price_max
      ? price.toString().slice(0, price.toString().split("").length - 5)
      : `${price_min
          .toString()
          .slice(0, price_min.toString().split("").length - 5)}-${kFormatter(
          parseInt(
            price_max
              .toString()
              .slice(0, price_max.toString().split("").length - 5)
          )
        )}`;

  return (
    <SearchPanel>
      <Tags>
        <TagItemLabel>Popular</TagItemLabel>
        {tags.map((t) => (
          <TagItem>{t}</TagItem>
        ))}
      </Tags>
      <div>
        <Searchbar />
        <Icon type='ExpandLeft' size={24} />
      </div>
      <Label>Search results for "{query}"</Label>
      <ResultSection>
        {mockSearchResponse.map(
          (res) =>
            // res.adsid !== null && (
            true && (
              <ResultItem>
                <ResultItemFixedContainer>
                  <ResultItemImage
                    src={`https://cf.shopee.ph/file/${res.image}`}
                  />
                </ResultItemFixedContainer>
                <ResultItemTitle>
                  {res.name.replace(/[^a-zA-Z0-9 ]/g, "")}
                </ResultItemTitle>
                <GridContainer>
                  <div>
                    <span style={{ fontSize: "0.8rem" }}>₱</span>
                    <Price>
                      {priceCompare({
                        price: res.price,
                        price_max: res.price_max,
                        price_min: res.price_min,
                      })}
                    </Price>
                  </div>
                  <div style={{ justifySelf: "end" }}>
                    {res.item_rating.rating_star.toFixed(1)}{" "}
                    <StarIcon
                      size={16}
                      percent={res.item_rating.rating_star * 20 - 20}
                    />
                  </div>
                  <div>
                    {kFormatter(res.sold)}
                    <Small>sold/mon</Small>
                  </div>
                  <div style={{ justifySelf: "end" }}>
                    {kFormatter(res.liked_count)}
                    <Icon size={16} type='Like' />
                  </div>
                  <Badges>
                    {/* {res.shopee_verified && (
                      <span>
                        Verified <Icon size={16} type='Checkmark' />
                      </span>
                    )} */}
                    {res.shopee_verified && (
                      <div>
                        <Icon size={16} type='Checkmark' />
                      </div>
                    )}
                    {res.is_adult && (
                      <div>
                        <Icon size={16} type='Fire' />
                      </div>
                    )}
                    <div>
                      <Icon size={16} type='PriceLow' />
                    </div>
                    <div>
                      <Icon
                        size={16}
                        type='Discount'
                        percent={res.raw_discount}
                      />
                    </div>
                    <div>
                      <Icon
                        size={16}
                        percent={Math.abs(
                          ((res.item_rating.rating_count[1] +
                            res.item_rating.rating_count[2]) /
                            res.item_rating.rating_count[0]) *
                            100
                        ).toFixed(1)}
                        type='LowStarsCount'
                      />
                    </div>
                  </Badges>

                  {res.brand !== "No Brand" && <div>{res.brand}</div>}
                </GridContainer>
              </ResultItem>
            )
        )}
      </ResultSection>
    </SearchPanel>
  );
};
const Label = styled.div`
  text-align: start;
  width: 86%;
  margin-bottom: 0.5rem;
  ${font.bold}
`;
const Price = styled.span`
  font-size: 1.1rem;
  ${font.regular}
`;

const Badges = styled.div`
  align-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". . . . .";
  grid-area: test;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.9fr 0.9fr 1.2fr;
  grid-template-areas:
    ". ."
    ". ."
    "test test";
  font-size: 13px;
  ${font.bold}
  padding:5px;
  white-space: nowrap;
  justify-items: start;
  align-items: center;
  line-height: 14px;
`;
const Small = styled.span`
  font-size: 0.5rem;
`;


const ResultItemTitle = styled.a`
  font-size: 0.75rem;
  width: 95%;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const ResultItemImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ResultItemFixedContainer = styled.div`
  position: relative;
  padding-bottom: 66%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.3rem;
`;

const ResultSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  width: 86%;
`;

const ResultItem = styled.div`
  background-color: ${color.backgroundLightest};
  ${shadows.shadowSm}
  text-align: center;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 8.3125rem;
  height: 12rem;
  margin-bottom: 0.5rem;
`;

const SearchPanel = styled.div`
  margin-left: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 35%;
  background-color: ${color.backgroundLight};
  align-items: center;
`;

const Tags = styled.div`
  flex-wrap: nowrap;
  ${mixin.scrollableX}
  ${mixin.customScrollbar({ height: 4 })}
  padding:0.5rem 1.25rem;
  border-bottom: 2px solid #2f88ff;
  width: 100%;
  height: 2.5rem;
`;

const Tag = styled.span`
  padding: 0.5rem 1rem;
  cursor: point;
  word-wrap: none;
  white-space: nowrap;
  border-radius: 9999px;
  width: 100%;
  padding: 5px 10px;
  margin-right: 0.35rem;
`;
const TagItem = styled(Tag)`
  background-color: ${color.backgroundLightest};
  transition: background-color 150ms;
  &:hover {
    background-color: ${color.backgroundLightPrimary};
  }
`;

const TagItemLabel = styled(Tag)`
  background-color: ${color.backgroundDarkPrimary};
  color: ${color.backgroundLightest};
`;
const StarIcon = ({
  size,
  percent = 0,
  red = false,
}: {
  size: number;
  percent?: number;
  red?: boolean;
}) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <linearGradient id='grad2'>
        <stop offset='0%' stop-color='#2F88FF' />
        <stop offset={percent + "%"} stop-color='#2F88FF' />
        <stop offset={percent + "%"} stop-color='white' />
        <stop offset='100%' stop-color='white' />
      </linearGradient>
    </defs>
    <rect width='48' height='48' fill='white' fill-opacity='0.01' />
    <path
      d='M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z'
      fill={red ? color.danger : "url(#grad2)"}
      stroke='#333'
      stroke-width='4'
      stroke-linejoin='round'
    />
  </svg>
);
