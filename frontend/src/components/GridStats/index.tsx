import React from "react";
import styled from "styled-components";
import { Layout, SearchItem } from "../../interfaces";
import {
  Badges,
  GridContainer,
  Price,
  Small,
} from "../../Search/Results/Styles";
import { kFormatter, priceCompare } from "../../shared/utils/utils";
import { Icon } from "../Icon";

interface Props {
  on?: "results" | "compare";
  layout?: Layout;
  item: SearchItem;
}

const GridStats = ({ on, item, layout }: Props) => {
  return (
    <GridContainer layout={layout} wide={on === "compare"}>
      <GridItem justify='start'>
        ₱
        <Price on={on}>
          {priceCompare({
            price: item.price,
            price_max: item.price_max,
            price_min: item.price_min,
          })}
        </Price>
      </GridItem>
      <GridItem justify='center'>
        {item.item_rating.rating_star.toFixed(1)}{" "}
        <Icon
          type='Star'
          size={16}
          percent={
            item.item_rating.rating_star === 0
              ? 0
              : item.item_rating.rating_star * 20 - 20
          }
        />
      </GridItem>
      <GridItem justify='start'>
        {kFormatter(item.sold)}
        <Small on={on}>sold/mon</Small>
      </GridItem>
      <GridItem justify='center'>
        {kFormatter(item.liked_count)}
        <Icon size={16} type='Like' />
      </GridItem>
      {/* {item.brand !== "No Brand" && <div>{item.brand}</div>} */}
      {on === "results" && (
        <Badges>
          {item.shopee_verified && <Icon size={16} type='Checkmark' />}
          {item.is_adult && <Icon size={16} type='Fire' />}
          {item.has_lowest_price_guarantee && (
            <Icon size={16} type='PriceLow' />
          )}
          {item.raw_discount && (
            <Icon size={16} type='Discount' percent={item.raw_discount} />
          )}
          {item.item_rating.rating_count[0] !== 0 && (
            <Icon
              size={16}
              percent={
                item.item_rating.rating_star === 0
                  ? 0
                  : Math.abs(
                      ((item.item_rating.rating_count[1] +
                        item.item_rating.rating_count[2]) /
                        item.item_rating.rating_count[0]) *
                        100
                    ).toFixed(1)
              }
              type='LowStarsCount'
            />
          )}
        </Badges>
      )}
    </GridContainer>
  );
};

const GridItem = styled.div<{ justify?: "start" | "end" | "center" | "" }>`
  justify-self: ${(props) => props.justify};
`;

export default GridStats;
