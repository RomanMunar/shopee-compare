import styled from "styled-components";
import { color, font, mixin, shadows } from "../styles";

export const Tags = styled.div`
  flex-wrap: nowrap;
  ${mixin.scrollableX}
  ${mixin.customScrollbar({ height: 4 })}
  padding:0.5rem 1.25rem;
  border-bottom: 2px solid #2f88ff;
  width: 100%;
  height: 2.5rem;
`;
export const Label = styled.div`
  text-align: start;
  width: 86%;
  margin-bottom: 0.5rem;
  ${font.bold}
`;
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
export const ResultItemImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const ResultItemFixedContainer = styled.div`
  position: relative;
  padding-bottom: 66%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.3rem;
`;

export const ResultSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  width: 86%;
`;

export const ResultItem = styled.div`
  background-color: ${color.backgroundLightest};
  ${shadows.shadowSm}
  text-align: center;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 8.3125rem;
  height: 12rem;
  margin-bottom: 0.5rem;
`;

export const SearchPanel = styled.div`
  margin-left: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 35%;
  background-color: ${color.backgroundLight};
  align-items: center;
`;
