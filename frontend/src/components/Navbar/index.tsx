import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useUI } from "../../shared/contexts/useUIContext";
import { NavIcon } from "../Icon";
import {
  Bottom,
  Item,
  ItemText, LogoLink, NavLeft,
  StyledLogo
} from "./Styles";

export const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState("/");
  const { pathname: url } = useLocation();
  const { displayOverlay } = useUI();

  useEffect(() => {
    setActiveRoute(url);
  }, [url]);
  return (
    <NavLeft isOverlayOn={displayOverlay}>
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
        <Item active={false}>
          <NavIcon size={28} type='Help' />
          <ItemText>About</ItemText>
        </Item>
      </Bottom>
    </NavLeft>
  );
};
