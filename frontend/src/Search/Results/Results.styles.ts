import styled from "styled-components";
import { Layout } from "../../interfaces";
import { color, font, mixin } from "../../shared/styles";

export {
  AddRowButton,
  Badges,
  GridContainer,
  Items,
  Price,
  ResultSection,
  Small,
};

const Price = styled.span<{ on?: "results" | "compare" }>`
  font-size: ${(props) => (props.on === "results" ? "1.1rem" : "1.6rem")};
  ${font.regular}
`;
const Badges = styled.div<{ wide?: boolean }>`
  margin-bottom: 5px;
  align-self: end;
  display: grid;
  grid-template-columns: ${(props) =>
    props.wide ? "1fr" : "1fr 1fr 1fr 1fr 1fr"};
  grid-template-areas: ". . . . .";
  grid-area: test;
`;

const GridContainer = styled.div<{ wide?: boolean; layout?: Layout }>`
  ${(props) =>
    props.wide === true
      ? props.layout !== "none"
        ? "padding: 10px 30px"
        : "padding: 10px 10px"
      : ""};
  width: ${(props) => props.wide && "100%"};
  font-size: ${(props) => (props.wide ? "20px" : "13px")};
  justify-items: ${(props) => (props.wide ? "center" : "start")};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.9fr 0.9fr ${(props) => !props.wide && "1.2fr"};
  grid-template-areas:
    ". ."
    ". ."
    "test test";
  ${font.bold}
  white-space: nowrap;
  align-items: center;
`;

const Small = styled.span<{ on?: "results" | "compare" }>`
  font-size: ${(props) => (props.on === "compare" ? "0.9rem" : "0.4rem")};
  ${font.regular}
`;

const ResultSection = styled.div<{ isDraggingOver: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  border: ${(props) => props.isDraggingOver && "1px solid #000"};
  ${mixin.scrollableY}
`;

const Items = styled.div<{
  isDraggingOver: boolean;
  isSelectedItemsEmpty: boolean;
}>`
  background-color: ${(props) =>
    !props.isSelectedItemsEmpty && color.backgroundLightPrimary};
  overflow: auto;
  ${mixin.scrollableX};
  ${mixin.customScrollbar()};
  width: 100%;
  flex-grow: 1;
  padding: 5px 10px;
  margin-top: 15px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const AddRowButton = styled.button<{
  showAddRow: boolean;
  right?: boolean;
  remove?: boolean;
}>`
  padding: 1px ${props => props.remove ? "7px" :"5px"};
  background: ${(props) =>
    props.right ? (props.remove ? color.danger : color.success) : "#2f88f8"};
  color: white;
  position: absolute;
  top: 10px;
  ${(props) => (props.right ? "right: 5px;" : "left: 5px;")}
  border-radius: 4px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: all ${(props) => (props.right ? "0.3s" : "0.1s")};
  visibility: ${(props) => props.showAddRow && "visible"};
  ${(props) =>
    !props.showAddRow && !props.right && "transform:translateX(-80px)"};
  transition-property: all;
  opacity: ${(props) => props.showAddRow && 1};
  &:hover {
    transform: scale(1.1);
  }
`;
