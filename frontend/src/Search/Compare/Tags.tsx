import React from "react";
import Flex from "../../components/Flex";
import { Icon } from "../../components/Icon";
import { Tag } from "../../components/Tag";
import { IconType, SearchItem } from "../../interfaces";
import { get1and2starAverage } from "../../shared/utils/utils";

interface Props {
  item: SearchItem;
}

const Tags = ({ item }: Props) => {
  const tags: {
    name: string;
    field: keyof SearchItem;
    type: IconType;
    percent?: number;
  }[] = [
    { name: "Verified", field: "shopee_verified", type: "Checkmark" },
    { name: "Hot", field: "is_adult", type: "Fire" },
    {
      name: "Lowest Price",
      field: "has_lowest_price_guarantee",
      type: "PriceLow",
    },
    {
      name: "Discount",
      field: "raw_discount",
      type: "Discount",
      percent: item.raw_discount,
    },
    {
      name: "Negative Reviews",
      field: "item_rating",
      type: "LowStarsCount",
      percent: get1and2starAverage(item.item_rating),
    },
  ];
  return (
    <Flex wrap='wrap' padding='0 15px'>
      {tags.map(
        ({ field, type, name, percent }) =>
          field && (
            <Tag>
              {percent ? (
                <Icon size={16} type={type} percent={percent} />
              ) : (
                <Icon size={16} type={type} />
              )}
              <span>{name}</span>
            </Tag>
          )
      )}
    </Flex>
  );
};

export default Tags;
