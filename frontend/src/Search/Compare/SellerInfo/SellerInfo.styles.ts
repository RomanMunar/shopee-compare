import styled from "styled-components";
import { font } from "../../../shared/styles";

export { GridCompare, SellerTag };

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
