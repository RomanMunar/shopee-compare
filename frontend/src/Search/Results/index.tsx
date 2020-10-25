import React, { ReactElement } from "react";
import { Icon } from "../../components/Icon";
import { SearchItem } from "../../interfaces";
import {
  Badges,
  GridContainer,
  Price,
  ResultItem,
  ResultSection,
  Small,
  ResultItemTitle,
} from "./Styles";
import ResultItemImage from "./ResultItemImage";
import { kFormatter, priceCompare } from "../utils";
interface Props {
  results: SearchItem[];
}

function Results({ results }: Props): ReactElement {
  return (
    <ResultSection>
      {results.map((res) => (
        <ResultItem>
          <ResultItemImage src={res.image} />
          <ResultItemTitle text={res.name.replace(/[^a-zA-Z0-9 ]/g, "")} />
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
              <Icon
                type='Star'
                size={16}
                percent={
                  res.item_rating.rating_star === 0
                    ? 0
                    : res.item_rating.rating_star * 20 - 20
                }
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
              {res.shopee_verified && <Icon size={16} type='Checkmark' />}
              {res.is_adult && <Icon size={16} type='Fire' />}
              {res.has_lowest_price_guarantee && (
                <Icon size={16} type='PriceLow' />
              )}
              {res.raw_discount && (
                <Icon size={16} type='Discount' percent={res.raw_discount} />
              )}
              {res.item_rating.rating_count[0] !== 0 && (
                <Icon
                  size={16}
                  percent={
                    res.item_rating.rating_star === 0
                      ? 0
                      : Math.abs(
                          ((res.item_rating.rating_count[1] +
                            res.item_rating.rating_count[2]) /
                            res.item_rating.rating_count[0]) *
                            100
                        ).toFixed(1)
                  }
                  type='LowStarsCount'
                />
              )}
            </Badges>
            {/* {res.brand !== "No Brand" && <div>{res.brand}</div>} */}
          </GridContainer>
        </ResultItem>
      ))}
    </ResultSection>
  );
}

export default Results;
