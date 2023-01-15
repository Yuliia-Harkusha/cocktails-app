import styled from "styled-components";

export const SectionForm = styled.section`
  padding-top: ${(props) => props.theme.spacing(5)};
  padding-bottom: ${(props) => props.theme.spacing(7)};
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 30rem;
  padding-top: ${(props) => props.theme.spacing(2)};
  padding-bottom: ${(props) => props.theme.spacing(3)};
  padding-left: ${(props) => props.theme.spacing(4)};
  padding-right: ${(props) => props.theme.spacing(4)};
  box-shadow: ${(props) => props.theme.shadows.lightShadow};
  background-color: #fff;
  border-radius: ${(props) => props.theme.radii.primary};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${(props) => props.theme.spacing(1.5)};
  color: ${(props) => props.theme.colors.accent};
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 0.2rem;
`;

export const Input = styled.input`
  width: -webkit-fill-available;
  border: none;
  padding: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.mainBackground};
  :focus-visible {
    outline-color: ${(props) => props.theme.colors.hover};
  }
`;
