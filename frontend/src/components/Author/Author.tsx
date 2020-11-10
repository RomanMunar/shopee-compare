import React from "react";
import { Rating } from "../../interfaces";
import { Icon } from "../Icon";
import { AuthorWrapper, AuthorImage } from "./Author.styles";

interface Props {
  name?: string;
  src?: string;
  aveStar?: number;
}

const Author = ({ name, src, aveStar }: Props) => {
  const shop = {
    account: {
      portrait: "b07ac6d8449d4f84abb1ba58d9371759",
      total_avg_star: 4.893882,
    },
    name: "PIDO YOGA",
    follower_count: 35344,
    response_rate: 100,
    response_time: 166,
    last_active_time: 1602848596,
  };

  return (
    <AuthorWrapper>
      <AuthorImage
        src={`https://cf.shopee.ph/file/${src ? src : shop.account.portrait}`}
      />
      <div style={{ fontSize: "14px" }}>
        <span>{name ? name : shop.name}</span>
        <div>
          {aveStar
            ? aveStar.toFixed(1)
            : shop.account.total_avg_star.toFixed(1)}{" "}
          <Icon type='Star' size={12} />
        </div>
      </div>
    </AuthorWrapper>
  );
};

export default Author;
