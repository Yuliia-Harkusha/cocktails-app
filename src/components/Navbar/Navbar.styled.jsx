import styled from "styled-components";
import { FaCocktail } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing(1)}
    ${(props) => props.theme.spacing(7)};
  box-shadow: ${(props) => props.theme.shadows.lightShadow};
  background-color: #fff;
`;

export const CocktailIcon = styled(FaCocktail)`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${(props) => props.theme.colors.accent};
`;

export const HeadLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  gap: ${(props) => props.theme.spacing(3)};
  padding: ${(props) => props.theme.spacing(2)};
  font-weight: 700;
  color: ${(props) => props.theme.colors.accent};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(6)};
`;

export const NavItem = styled(NavLink)`
  font-size: ${(props) => props.theme.fontSizes.medLarge};
  padding: ${(props) => props.theme.spacing(2)}
    ${(props) => props.theme.spacing(3)};
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray};
  :hover,
  :focus {
    color: ${(props) => props.theme.colors.hover};
    background-color: ${(props) => props.theme.colors.mainBackground};
    border-radius: ${(props) => props.theme.radii.primary};
  }
  &.active {
    color: ${(props) => props.theme.colors.accent};
  }
`;
