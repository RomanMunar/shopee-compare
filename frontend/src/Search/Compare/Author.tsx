import React from "react";
import { Icon } from "../../components/Icon";
import { AuthorWrapper, AuthorImage } from "./Styles";

interface Props {}

const Author = (props: Props) => {
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
          src={"https://cf.shopee.ph/file/" + shop.account.portrait}
        />
        <div>
          <div>
            {shop.account.total_avg_star.toFixed(1)}{" "}
            <Icon type='Star' size={12} />
          </div>
          <span>-{shop.name}</span>
        </div>
      </AuthorWrapper>
  );
};

export default Author;
