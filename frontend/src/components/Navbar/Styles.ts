import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { font, sizes, color, mixin, zIndexValues } from "../../styles";
import { Logo } from "../Logo";
import { Icon } from "../Icon";

export const NavLeft = styled.aside`
  z-index: 100;
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

export const StyledIcon = styled(Icon)`
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const LogoLink = styled(NavLink)`
  display: block;
  margin: 20px 0 20px 5px;
`;

export const StyledLogo = styled(Logo)`
  display: inline-block;
  margin-left: 8px;
  padding: 10px;
  ${mixin.clickable}
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  left: 16px;
  width: 100%;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  line-height: 42px;
  color: ${color.textLink};
  ${mixin.clickable}
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const ItemText = styled.div`
  position: relative;
  right: 12px;
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
