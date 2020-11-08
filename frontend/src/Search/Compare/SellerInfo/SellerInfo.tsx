import React from "react";
import { getRelativeTimeFormat } from "../../../shared/utils/utils";
import { GridCompare, SellerTag } from "./SellerInfo.styles";

const SellerTags = () => {
  const responseTime = (ms: number) => {
    const minute = Math.round(ms / 60);
    const hour = minute * 60;
    if (minute < 60) return "within " + minute + " minutes";
    if (minute > 60) return "within " + Math.round(ms / 3600) + " hour";
    if (minute < 1) return "within seconds";
    if (hour > 24) return "inactive";
  };

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
    <GridCompare>
      <div>
        <div>Followers</div>
        <SellerTag>{shop.follower_count}</SellerTag>
      </div>

      <div>
        <div>Active</div>
        <SellerTag>
          {getRelativeTimeFormat(
            new Date(),
            new Date(shop.last_active_time * 1000)
          )}
        </SellerTag>
      </div>
      <div>
        <div>Responds</div>
        <SellerTag>{shop.response_rate}%</SellerTag>
      </div>
      <div>
        <div>Replies</div>
        <SellerTag>{responseTime(shop.response_time)}</SellerTag>
      </div>
    </GridCompare>
  );
};

export default SellerTags;
