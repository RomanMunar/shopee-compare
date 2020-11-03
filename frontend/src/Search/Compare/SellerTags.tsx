import React from "react";
import styled from "styled-components";
import { font } from "../../shared/styles";
import { getRelativeTimeFormat } from "../../shared/utils/utils";

interface Props {}

export const SellerTags = (props: Props) => {
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
        <SellerTag>
          {shop.follower_count}
        </SellerTag>
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
        <SellerTag>
          {shop.response_rate}%
        </SellerTag>
      </div>
      <div>
        <div>Replies</div>
        <SellerTag>
          {responseTime(shop.response_time)}
        </SellerTag>
      </div>
    </GridCompare>
  );
};

export const SellerSection = styled.div`
  background-color: rgba(193, 199, 208, 0.6);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  margin-top: 20px;
`;

const GridCompare = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 5px;
  font-size: 13px;
`;

const SellerTag = styled.span`
  color: #2f88ff;
  white-space: nowrap;
  ${font.bold}
`;
