import { memo } from "react";
import styled from "styled-components";
import { color, font, mixin, shadows } from "../styles";

export const MenuWrapper = styled.div`
  width: 86%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`;

export const Tags = styled.div`
  flex-wrap: nowrap;
  ${mixin.scrollableX}
  ${mixin.customScrollbar({ height: 4 })}
  padding:1rem 0;
  border-bottom: 2px solid #2f88ff;
  width: 100%;
`;
export const Label = styled.span`
  width: 86%;
  ${font.bold}
`;

export const SearchPanel = memo(styled.div<{
  isSearchPanelOpen: boolean;
  isSearchPanelMaximized: boolean;
}>`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  position: absolute;
  bottom: 20px;
  height: 95vh;
  width: ${(props) => (props.isSearchPanelMaximized ? "86%" : "35%")};
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
`);
