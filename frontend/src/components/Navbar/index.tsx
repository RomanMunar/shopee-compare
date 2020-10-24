import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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

export const Navbar = (props: Props) => {
  const [activeRoute, setActiveRoute] = useState("/");
  const { pathname: url } = useLocation();
  useEffect(() => {
    setActiveRoute(url);
  }, [url]);
  return (
    <NavLeft>
      <LogoLink to='/'>
        <StyledLogo />
      </LogoLink>
      <NavLink to='/search'>
        <Item active={activeRoute === "/search"}>
          <NavIcon size={28} type='Search' />
          <ItemText>Search</ItemText>
        </Item>
      </NavLink>
      <NavLink to='/bookmarks'>
        <Item active={activeRoute === "/bookmarks"}>
          <NavIcon size={28} type='Bookmark' />
          <ItemText>Bookmarks</ItemText>
        </Item>
      </NavLink>
      <NavLink to='/settings'>
        <Item active={activeRoute === "/settings"}>
          <NavIcon size={28} type='Setting' />
          <ItemText>Settings</ItemText>
        </Item>
      </NavLink>
      <Bottom>
        <NavIcon size={28} type='Help' />
        <ItemText>About</ItemText>
      </Bottom>
    </NavLeft>
  );
};
