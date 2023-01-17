import styled from "styled-components";

export const UpperText = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing(6)};
`;

export const Heading = styled.h2`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  margin-top: ${(props) => props.theme.spacing(3)};
  letter-spacing: 0.2rem;
`;

export const DrinkWrapper = styled.div`
  /* width: 95vw; */
  margin: 0 auto;
  text-align: left;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: ${(props) => props.theme.spacing(6)};
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: ${(props) => props.theme.radii.primary};
  margin-bottom: ${(props) => props.theme.spacing(6)};

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const DrinkData = styled.span`
  margin-right: ${(props) => props.theme.spacing(1.5)};
  padding-top: ${(props) => props.theme.spacing(0.8)};
  padding-bottom: ${(props) => props.theme.spacing(0.8)};
  padding-right: ${(props) => props.theme.spacing(1.5)};
  padding-left: ${(props) => props.theme.spacing(1.5)};
  background-color: ${(props) => props.theme.colors.hover};
  color: ${(props) => props.theme.colors.gray};
  border-radius: ${(props) => props.theme.radii.primary};
  font-weight: 600;
`;

export const DrinkInfo = styled.p`
  line-height: 1.8;
  margin-top: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: 600;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.spacing(2)};
  }
`;

export const Ingredient = styled.span`
  :nth-child(n + 2) {
    display: block;
    margin-left: ${(props) => props.theme.spacing(4)};
  }
`;
