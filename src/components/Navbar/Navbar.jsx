import React from "react";

import {
  CocktailIcon,
  Navigation,
  NavList,
  NavItem,
  HeadLink,
} from "./Navbar.styled";

export const Navbar = () => {
  return (
    <Navigation>
      <HeadLink to="/">
        <CocktailIcon />
        <h2>TheCocktailDB</h2>
      </HeadLink>
      <NavList>
        <li>
          <NavItem to="/">Home</NavItem>
        </li>
        <li>
          <NavItem to="/about">About</NavItem>
        </li>
      </NavList>
    </Navigation>
  );
};
