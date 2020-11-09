import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { color, font, mixin } from "../../shared/styles";
import { Logo } from "../Logo";

export const NavLeft = styled.aside<{ isOverlayOn: boolean }>`
  z-index: ${(props) => (props.isOverlayOn ? 1 : 400)};
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  height: 100vh;
  width: 64px;
  background: ${color.backgroundLight};
  transition: all 0.1s;
  ${mixin.hardwareAccelerate}
  &:hover {
    width: 200px;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  margin: 20px 0 20px 5px;
`;

export const StyledLogo = styled(Logo)`
  display: inline-block;
  margin-left: 8px;
  ${mixin.clickable}
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Item = styled.div<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  ${mixin.clickable}
  background-color:${(props) => props.active && "#fff"};
  &:hover {
    background: ${(props) => !props.active && "rgba(0, 0, 0, 0.1)"};
  }
`;

export const ItemText = styled.div`
  color: ${color.textLink};
  position: relative;
  right: 20px;
  visibility: hidden;
  opacity: 0;
  text-transform: uppercase;
  transition: all 0.1s;
  transition-property: right, visibility, opacity;
  ${font.bold}
  font-size:12;
  ${NavLeft}:hover & {
    right: 0;
    visibility: visible;
    opacity: 1;
  }
`;
