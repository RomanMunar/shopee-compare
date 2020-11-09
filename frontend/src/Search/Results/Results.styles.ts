import styled from "styled-components";
import { Layout } from "../../interfaces";
import { mixin, shadows, color, font } from "../../shared/styles";

//  SelectPanel Title

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
export const ResultItemTitle = styled.a`
  text-align: start;
  font-size: 0.75rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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

export const ResultItem = styled.div<{
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
