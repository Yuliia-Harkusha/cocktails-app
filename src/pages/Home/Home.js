import React from "react";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { CocktailList } from "../../components/CocktailList/CocktailList";

export default function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
}
