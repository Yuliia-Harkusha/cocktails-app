import styled from "styled-components";
import { FaCocktail } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.spacing(1)};
  padding-bottom: ${(props) => props.theme.spacing(1)};
  padding-right: ${(props) => props.theme.spacing(4)};
  padding-left: ${(props) => props.theme.spacing(4)};
  box-shadow: ${(props) => props.theme.shadows.lightShadow};
  background-color: #fff;

  @media screen and (min-width: 768px) {
    width: auto;
    padding-right: ${(props) => props.theme.spacing(7)};
    padding-left: ${(props) => props.theme.spacing(7)};
  }
`;

export const CocktailIcon = styled(FaCocktail)`
  font-size: ${(props) => props.theme.fontSizes.large};
  transition: ${(props) => props.theme.animation.cubicBezier};
  color: ${(props) => props.theme.colors.accent};
  :hover,
  :focus {
    color: ${(props) => props.theme.colors.hover};
  }

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

export const HeadLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  gap: ${(props) => props.theme.spacing(3)};
  padding: ${(props) => props.theme.spacing(2)};
  font-weight: 500;

  color: ${(props) => props.theme.colors.accent};

  @media screen and (min-width: 768px) {
    font-weight: 700;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(3)};

  @media screen and (min-width: 768px) {
    gap: ${(props) => props.theme.spacing(6)};
  }
`;

export const NavItem = styled(NavLink)`
  font-size: ${(props) => props.theme.fontSizes.medLarge};
  padding-top: ${(props) => props.theme.spacing(2)};
  padding-bottom: ${(props) => props.theme.spacing(2)};
  padding-right: ${(props) => props.theme.spacing(3)};
  padding-left: ${(props) => props.theme.spacing(3)};
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray};
  transition: ${(props) => props.theme.animation.cubicBezier};
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
