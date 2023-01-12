import React from "react";
import { Container } from "../../components/Container/Container";
import { ErrorWrapper, Heading, LinkBtn } from "./Error.styled";

export default function Error() {
  return (
    <Container>
      <ErrorWrapper>
        <Heading>Something went wrong...</Heading>
        <LinkBtn to="/">Back home</LinkBtn>
      </ErrorWrapper>
    </Container>
  );
}
