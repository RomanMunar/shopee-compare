import styled from "styled-components";
import { shadows } from "../../../../shared/styles";

export { ModelsContainer, ModelItem, Title };

const ModelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ModelItem = styled.div`
  padding: 5px;
  border-radius: 5px;
  background: #f1f1f1;
  min-width: 120px;
  ${shadows.shadowMd}
  margin: 5px 5px 5px 0;
  &:last-of-type {
    margin: 5px 5px 0 0;
  }
`;
const Title = styled.span`
  font-size: 14px;
  font-family: Roboto-medium;
  text-transform: capitalize;
`;
