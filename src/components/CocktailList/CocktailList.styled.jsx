import styled from "styled-components";

export const Message = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.lightGray};
`;

export const Heading = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: ${(props) => props.theme.spacing(8)};
  margin-top: ${(props) => props.theme.spacing(6)};
  letter-spacing: 0.2rem;
`;

export const MainList = styled.ul`
  display: grid;
  gap: ${(props) => props.theme.spacing(6)};
  margin: 0 auto;

  @media screen and (min-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
