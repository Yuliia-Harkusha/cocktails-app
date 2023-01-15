import React from "react";
import { useGlobalContext } from "../../context";
import { Cocktail } from "../Cocktail/Cocktail";

export const CocktailList = () => {
  const { cocktails } = useGlobalContext();

  if (cocktails.length < 1) {
    return <p>No cocktails matched your search criteria</p>;
  }
  return (
    <section>
      <h2>Cocktails</h2>
      <div>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
