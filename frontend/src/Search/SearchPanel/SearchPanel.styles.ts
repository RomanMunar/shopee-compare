import styled from "styled-components";
import { color, font, shadows } from "../../shared/styles";

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-right: auto;
`;
export const Label = styled.span`
  white-space: nowrap;
  ${font.bold}
`;

export const SearchPanelStyle = styled.div<{
  isSearchPanelOpen: boolean;
  isSearchPanelMaximized: boolean;
}>`
  padding: ${(props) => (props.isSearchPanelMaximized ? "0 50px" : "0 20px")};
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  position: absolute;
  bottom: 20px;
  height: 95%;
  width: ${(props) => (props.isSearchPanelMaximized ? "86%" : "45%")};
  background-color: ${color.backgroundLight};
  align-items: center;
  transition: all 0.2s;
  transition-property: all;
  visibility: hidden;
  opacity: 0;
  transform: ${(props) => !props.isSearchPanelOpen && "translateX(-80px)"};
  visibility: ${(props) => props.isSearchPanelOpen && "visible"};
  opacity: ${(props) => props.isSearchPanelOpen && 1};
  ${shadows.shadowMd}
  z-index: 300;
`;
