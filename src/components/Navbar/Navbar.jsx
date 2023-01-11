import React from "react";
import { Link } from "react-router-dom";
import { CocktailIcon, Navigation, NavList, NavItem } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <Navigation>
      <Link to="/">
        <CocktailIcon />
      </Link>
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
