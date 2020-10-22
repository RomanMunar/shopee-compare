import React from "react";
import { NavLink } from "react-router-dom";
import { NavIcon } from "../Icon";
import {
  NavLeft,
  LogoLink,
  StyledLogo,
  Bottom,
  Item,
  ItemText,
  StyledIcon,
} from "./Styles";

interface Props {
  text?: string;
}

export const Navbar = (props: Props) => (
  <NavLeft>
    <LogoLink to='/'>
      <StyledLogo />
    </LogoLink>
    <NavLink to='/search'>
      <Item>
        <NavIcon left={3} size={24} type='Search' />
        <ItemText>Search</ItemText>
      </Item>
    </NavLink>
    <NavLink to='/bookmarks'>
      <Item>
        <NavIcon left={3} size={24} type='Bookmark' />
        <ItemText>Bookmarks</ItemText>
      </Item>
    </NavLink>
    <NavLink to='/settings'>
      <Item>
        <NavIcon left={3} size={24} type='Setting' />
        <ItemText>Settings</ItemText>
      </Item>
    </NavLink>
    <Bottom>
      <StyledIcon size={24} type='Help' />
    </Bottom>
  </NavLeft>
);
