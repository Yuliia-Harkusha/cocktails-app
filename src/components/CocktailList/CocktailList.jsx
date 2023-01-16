import React from "react";
import { useGlobalContext } from "../../context";
import { Cocktail } from "../Cocktail/Cocktail";
import { Message, Heading, MainList } from "./CocktailList.styled";

export const CocktailList = () => {
  const { cocktails } = useGlobalContext();

  if (cocktails.length < 1) {
    return <Message>No cocktails matched your search criteria</Message>;
  }
  return (
    <section>
      <Heading>Cocktails</Heading>
      <MainList>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </MainList>
    </section>
  );
};
