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
        <NavIcon size={24} type='Search' />
        <ItemText>Search</ItemText>
      </Item>
    </NavLink>
    <NavLink to='/bookmarks'>
      <Item>
        <NavIcon size={24} type='Bookmark' />
        <ItemText>Bookmarks</ItemText>
      </Item>
    </NavLink>
    <NavLink to='/settings'>
      <Item>
        <NavIcon size={24} type='Setting' />
        <ItemText>Settings</ItemText>
      </Item>
    </NavLink>
    <Bottom>
      <NavIcon size={24} type='Help' />
      <ItemText>About</ItemText>
    </Bottom>
  </NavLeft>
);
