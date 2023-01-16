import styled from "styled-components";

export const CocktailItem = styled.li`
  background-color: #fff;
  border-radius: ${(props) => props.theme.radii.primary};
  box-shadow: ${(props) => props.theme.shadows.lightShadow};
  transition: ${(props) => props.theme.animation.cubicBezier};
  :hover,
  :focus {
    box-shadow: ${(props) => props.theme.shadows.darkShadow};
  }
`;

export const CocktailImg = styled.img`
  width: 100%;
  /* object-fit: cover; */
  border-top-left-radius: ${(props) => props.theme.radii.primary};
  border-top-right-radius: ${(props) => props.theme.radii.primary};
`;

export const CocktailText = styled.div`
  padding: ${(props) => props.theme.spacing(3)};
`;

export const CocktailName = styled.h3`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: ${(props) => props.theme.spacing(1)};
`;

export const CocktailGlass = styled.h4`
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: ${(props) => props.theme.spacing(1)};
`;

export const CocktailInfo = styled.p`
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;
