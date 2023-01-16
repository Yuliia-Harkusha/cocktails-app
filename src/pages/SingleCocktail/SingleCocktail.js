import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default function SingleCocktail() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCocktail();
  }, [id]);

  //   if (!cocktail) {
  //     return <p> no coktail</p>;
  //   } else {
  //     const { name, image, category, info, glass, instructions, ingredients } =
  //       cocktail;
  //   }

  return (
    <main>
      {/* <Container>
        <h2>{name}</h2>
        <div>
          <img src={image} alt={name} />
          <div>
            <p>
              <span>Name: </span> {name}
            </p>
            <p>
              <span>Category: </span> {category}
            </p>
            <p>
              <span>Info: </span> {info}
            </p>
            <p>
              <span>Glass: </span> {glass}
            </p>
            <p>
              <span>Instructions: </span> {instructions}
            </p>
            <p>
              <span>Ingredients: </span>
            </p>
          </div>
        </div>
      </Container> */}
    </main>
  );
}
