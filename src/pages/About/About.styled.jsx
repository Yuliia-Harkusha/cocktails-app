import styled from "styled-components";

export const Heading = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

export const Text = styled.p`
  margin-bottom: ${(props) => props.theme.spacing(3)};
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 550px;
`;

export const Href = styled.a`
  color: ${(props) => props.theme.colors.hover};
  &:visited {
    ${(props) => props.theme.colors.accent};
  }
`;
