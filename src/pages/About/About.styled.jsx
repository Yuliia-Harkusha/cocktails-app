import styled from "styled-components";

export const Heading = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const Text = styled.p`
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 550px;
`;
