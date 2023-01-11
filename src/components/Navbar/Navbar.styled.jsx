import styled from "styled-components";
import { FaCocktail } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const CocktailIcon = styled(FaCocktail)`
  padding: ${(props) => props.theme.spacing(4)};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${(props) => props.theme.colors.accent};
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing(1)}
    ${(props) => props.theme.spacing(7)};
  box-shadow: ${(props) => props.theme.shadows.lightShadow};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(6)};
`;

export const NavItem = styled(NavLink)`
  font-size: ${(props) => props.theme.fontSizes.medLarge};
  padding: ${(props) => props.theme.spacing(2)};
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray};
  :hover,
  :focus {
    color: ${(props) => props.theme.colors.hover};
  }
  &.active {
    color: ${(props) => props.theme.colors.accent};
  }
`;
