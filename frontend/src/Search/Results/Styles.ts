import styled from "styled-components";
import { mixin, shadows, color, font } from "../../styles";

export const Price = styled.span`
  font-size: 1.1rem;
  ${font.regular}
`;
export const Badges = styled.div`
  align-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". . . . .";
  grid-area: test;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.9fr 0.9fr 1.2fr;
  grid-template-areas:
    ". ."
    ". ."
    "test test";
  font-size: 13px;
  ${font.bold}
  padding:5px;
  white-space: nowrap;
  justify-items: start;
  align-items: center;
  line-height: 14px;
`;

export const Small = styled.span`
  font-size: 0.5rem;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
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
`;

export const Title = styled.span`
  font-size: 20px;
  ${font.medium}
  line-height: 20px;
`;

export const Items = styled.div<{ isDraggingOver: boolean }>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? color.backgroundMedium
      : color.backgroundLightPrimary};
  padding: 5px 10px;
  margin-top: 15px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const Item = styled.div<{ isDragging: boolean; draggingStyle: any }>`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${(props) => props.draggingStyle}
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

export const SelectPanel = styled.div`
  padding: 20px;
  border-radius: 15px;
  background-color: ${color.backgroundLight};
  position: absolute;
  width: 55%;
  height: 55%;
  top: 110px;
  left: 500px;
`;
