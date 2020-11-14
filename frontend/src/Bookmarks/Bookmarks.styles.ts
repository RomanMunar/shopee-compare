import styled from "styled-components";
import { font } from "../shared/styles";

export {
  ContainedRoute,
  Title,
};

const ContainedRoute = styled.div`
  padding: 30px 0 0 30px;
`;


const Title = styled.h1`
  margin-right: 20px;
  font-size: 30px;
  ${font.medium}
  line-height: 30px;
`;
