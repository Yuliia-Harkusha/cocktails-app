import React from "react";
import { Container } from "../../components/Container/Container";
import { ErrorWrapper, Heading } from "./Error.styled";
import { LinkBtn } from "../../components/Container/Container.styled";

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
