import styled from "styled-components";
import { mixin, shadows, color, font } from "../../styles";

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

export const GridContainer = styled.div<{ wide?: boolean }>`
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
  padding:${(props) => (props.wide ? "5px 15px 15px 15px" : "5px")};
  white-space: nowrap;
  align-items: center;
`;

export const Small = styled.span<{ on?: "results" | "compare" }>`
  font-size: ${(props) => (props.on === "compare" ? "0.9rem" : "0.4rem")};
  ${font.regular}
`;
export const ResultItemTitle = styled.a`
  font-size: 0.75rem;
  width: 95%;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const ResultItemImage = styled.img<{ direction: "left" | "top" }>`
  ${(props) => props.direction === "left" && "border-radius: 10px;"}
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const ResultItemFixedContainer = styled.div<{
  direction: "top" | "left";
}>`
  position: relative;
  ${(props) =>
    props.direction === "top"
      ? "padding-bottom:66%"
      : "padding-right:35%;padding-bottom:20%;margin-top:3px;"};
  ${(props) =>
    props.direction === "top" && "box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);"};
  margin-bottom: 0.3rem;
`;

export const ResultSection = styled.div<{ isDraggingOver: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 86%;
  border: ${(props) => props.isDraggingOver && "1px solid #000"};
  ${mixin.scrollableY}
  ${mixin.customScrollbar()}
`;

export const ResultItem = styled.div<{
  isDragging: boolean;
  draggingStyle: any;
  selected: boolean;
}>`
  background-color: ${color.backgroundLightest};
  ${shadows.shadowSm}
  border:  ${(props) => props.selected && `2px solid rgba(11, 135, 91, 0.5)`};
  text-align: center;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 8.3125rem;
  height: 12rem;
  margin-bottom: 0.5rem;
  margin-right: 4px;
  &:last-of-type {
    margin-right: 0;
  }
`;

//******************************** Select Panel ********************************//
export const SelectPanel = styled.div<{ isSelectPanelOpen: boolean }>`
  ${shadows.shadowMd}
  ${(props) =>
    !props.isSelectPanelOpen && "transform: translateX(-100%);opacity:0;"}
  padding: 20px;
  border-radius: 15px;
  background-color: ${color.backgroundLight};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 55%;
  top: 80px;
  left: 500px;
`;

export const Title = styled.span`
  font-size: 20px;
  ${font.medium}
  line-height: 20px;
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
  flex-grow: 1;
  padding: 5px 10px;
  margin-top: 15px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const Item = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ItemImage = styled.img`
  width: 20%;
`;

export const ItemText = styled.span`
  font-size: 13px;
  margin-left: 5px;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
