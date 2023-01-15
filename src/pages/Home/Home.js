import React from "react";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { CocktailList } from "../../components/CocktailList/CocktailList";
import { Container } from "../../components/Container/Container";

export default function Home() {
  return (
    <main>
      <Container>
        <SearchForm />
        <CocktailList />
      </Container>
    </main>
  );
}
