import styled from "styled-components";
import { color, font, mixin, shadows } from "../styles";

export const Tags = styled.div`
  flex-wrap: nowrap;
  ${mixin.scrollableX}
  ${mixin.customScrollbar({ height: 4 })}
  padding:1rem 0;
  border-bottom: 2px solid #2f88ff;
  width: 100%;
`;
export const Label = styled.div`
  text-align: start;
  width: 86%;
  margin-bottom: 0.5rem;
  ${font.bold}
`;

export const SearchPanel = styled.div<{ isSearchPanelOpen: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  position: absolute;
  bottom: 10px;
  height: 90vh;
  width: 35%;
  background-color: ${color.backgroundLight};
  align-items: center;
  transition: all 0.2s;
  transition-property: all;
  visibility: hidden;
  opacity: 0;
  transform: ${(props) =>
    props.isSearchPanelOpen ? "translateX()" : "translateX(-80px)"};
  visibility: ${(props) => props.isSearchPanelOpen && "visible"};
  opacity: ${(props) => props.isSearchPanelOpen && 1};
  ${shadows.shadowMd}
  z-index: 300;
`;
