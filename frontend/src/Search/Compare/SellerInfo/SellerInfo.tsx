import React from "react";
import { getRelativeTimeFormat } from "../../../shared/utils/utils";
import { GridCompare, SellerTag } from "./SellerInfo.styles";

interface Props {
  follower_count: number;
  response_rate: number;
  response_time: number;
  last_active_time: number;
}
const SellerTags = ({
  follower_count,
  response_rate,
  response_time,
  last_active_time,
}: Props) => {
  const responseTime = (ms: number) => {
    const minute = Math.round(ms / 60);
    const hour = minute * 60;
    if (minute < 60) return "within " + minute + " minutes";
    if (minute > 60) return "within " + Math.round(ms / 3600) + " hour";
    if (minute < 1) return "within seconds";
    if (hour > 24) return "inactive";
  };

  return (
    <GridCompare>
      <div>
        <div>Followers</div>
        <SellerTag>{follower_count}</SellerTag>
      </div>

      <div>
        <div>Active</div>
        <SellerTag>
          {getRelativeTimeFormat(new Date(), new Date(last_active_time * 1000))}
        </SellerTag>
      </div>
      <div>
        <div>Responds</div>
        <SellerTag>{response_rate}%</SellerTag>
      </div>
      <div>
        <div>Replies</div>
        <SellerTag>{responseTime(response_time)}</SellerTag>
      </div>
    </GridCompare>
  );
};

export default SellerTags;
