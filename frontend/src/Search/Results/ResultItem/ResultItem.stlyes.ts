import styled from "styled-components";
import { color, shadows } from "../../../shared/styles";

export { ResultItemTitle, RItem };

const ResultItemTitle = styled.a`
  text-align: start;
  font-size: 0.75rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const RItem = styled.div<{
  isDragging: boolean;
  selected: boolean;
  big: boolean;
}>`
  overflow: hidden;
  background-color: ${(props) =>
    props.isDragging ? color.backgroundLightPrimary : color.backgroundLightest};
  ${shadows.shadowSm}
  border:  ${(props) => props.selected && `2px solid rgba(11, 135, 91, 0.5)`};
  text-align: center;
  border-radius: 0.5rem;
  overflow: hidden;
  width: ${(props) => (props.big ? "10.3125rem" : "8.3125rem")};
  margin-bottom: ${(props) => (props.big ? "1.2rem" : "0.7rem")};
  margin-right: ${(props) => (props.big ? "10px" : "6px")};
  &:last-of-type {
    margin-right: 0;
  }
`;
