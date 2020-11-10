import styled from "styled-components";
import { Layout } from "../../interfaces";
import { color, font, mixin } from "../../shared/styles";

export const Price = styled.span<{ on?: "results" | "compare" }>`
  font-size: ${(props) => (props.on === "results" ? "1.1rem" : "1.6rem")};
  ${font.regular}
`;
export const Badges = styled.div<{ wide?: boolean }>`
  margin-bottom: 5px;
  align-self: end;
  display: grid;
  grid-template-columns: ${(props) =>
    props.wide ? "1fr" : "1fr 1fr 1fr 1fr 1fr"};
  grid-template-areas: ". . . . .";
  grid-area: test;
`;

export const GridContainer = styled.div<{ wide?: boolean; layout?: Layout }>`
  ${(props) =>
    props.wide === true
      ? props.layout !== "none"
        ? "padding: 10px 40px"
        : "padding: 10px 20px"
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

export const Small = styled.span<{ on?: "results" | "compare" }>`
  font-size: ${(props) => (props.on === "compare" ? "0.9rem" : "0.4rem")};
  ${font.regular}
`;

export const ResultSection = styled.div<{ isDraggingOver: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  border: ${(props) => props.isDraggingOver && "1px solid #000"};
  ${mixin.scrollableY}
`;

export const Items = styled.div<{
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
