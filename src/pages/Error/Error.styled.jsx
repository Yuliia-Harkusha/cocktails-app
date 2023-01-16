import styled from "styled-components";

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
