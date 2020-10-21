import React from "react";
import { ReactComponent as AboutIcon } from "../../assets/help.svg";
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

    <Item>
      {/* <Icon type='search' size={22} top={1} left={3} /> */}
      <ItemText>Search issues</ItemText>
    </Item>

    <Item>
      {/* <Icon type='plus' size={27} /> */}
      <ItemText>Create Issue</ItemText>
    </Item>

    <Bottom>
      <AboutIcon />
    </Bottom>
  </NavLeft>
);
