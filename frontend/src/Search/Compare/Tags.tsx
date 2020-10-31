import React from "react";
import { Icon } from "../../components/Icon";
import { Tag } from "../../components/Tag";
import { SearchItem } from "../../interfaces";

interface Props {
  item: SearchItem;
}

const Tags = ({ item }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "0 15px",
      }}
    >
      {item.shopee_verified && (
        <Tag>
          <Icon size={16} type='Checkmark' />
          <span>Verified</span>
        </Tag>
      )}
      {item.is_adult && (
        <Tag>
          <Icon size={16} type='Fire' />
          <span>Hot</span>
        </Tag>
      )}
      {item.has_lowest_price_guarantee && (
        <Tag>
          <Icon size={16} type='PriceLow' />
          <span>Lowest Price</span>
        </Tag>
      )}
      {item.raw_discount && (
        <Tag>
          <Icon size={16} type='Discount' percent={item.raw_discount} />
          <span>Discount</span>
        </Tag>
      )}
      {item.item_rating.rating_count[0] !== 0 && (
        <Tag>
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
          <span>Negative Reviews</span>
        </Tag>
      )}
    </div>
  );
};

export default Tags;
