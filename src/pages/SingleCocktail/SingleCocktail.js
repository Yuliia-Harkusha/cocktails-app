import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { LinkBtn } from "../../components/Container/Container.styled";
import {
  UpperText,
  Heading,
  DrinkWrapper,
  Image,
  DrinkData,
  DrinkInfo,
  Ingredient,
} from "./SingleCocktail.styled";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default function SingleCocktail() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState("");

  useEffect(() => {
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

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

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  return (
    <main>
      <Container>
        <UpperText>
          <LinkBtn to="/">Go back</LinkBtn>
          <Heading>{name}</Heading>
        </UpperText>

        <DrinkWrapper>
          <Image src={image} alt={name} />
          <div>
            <DrinkInfo>
              <DrinkData>Name: </DrinkData> {name}
            </DrinkInfo>
            <DrinkInfo>
              <DrinkData>Category: </DrinkData> {category}
            </DrinkInfo>
            <DrinkInfo>
              <DrinkData>Info: </DrinkData> {info}
            </DrinkInfo>
            <DrinkInfo>
              <DrinkData>Glass: </DrinkData> {glass}
            </DrinkInfo>
            <DrinkInfo>
              <DrinkData>Instructions: </DrinkData> {instructions}
            </DrinkInfo>
            <DrinkInfo>
              <DrinkData>Ingredients: </DrinkData>
              {ingredients &&
                ingredients.map((item, index) => {
                  return <Ingredient key={index}> {item}</Ingredient>;
                })}
            </DrinkInfo>
          </div>
        </DrinkWrapper>
      </Container>
    </main>
  );
}
