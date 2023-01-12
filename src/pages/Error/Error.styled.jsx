import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorWrapper = styled.div`
  text-align: center;
`;

export const Heading = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: ${(props) => props.theme.spacing(6)};
  margin-top: ${(props) => props.theme.spacing(6)};
`;

export const LinkBtn = styled(Link)`
  display: inline-block;
  text-transform: uppercase;
  padding: ${(props) => props.theme.spacing(1)}
    ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.radii.primary};
  transition: ${(props) => props.theme.animation.cubicBezier};
  :hover,
  :focus {
    color: ${(props) => props.theme.colors.gray};
    background-color: ${(props) => props.theme.colors.hover};
  }
`;
