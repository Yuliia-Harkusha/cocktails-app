import React from "react";
import { Link } from "react-router-dom";
import {
  CocktailItem,
  CocktailText,
  CocktailImg,
  CocktailName,
  CocktailGlass,
  CocktailInfo,
} from "./Cocktail.styled";
import { LinkBtn } from "../../pages/Error/Error.styled";

export const Cocktail = ({ id, image, name, info, glass }) => {
  return (
    <CocktailItem>
      <CocktailImg src={image} alt={name} />

      <CocktailText>
        <CocktailName>{name}</CocktailName>
        <CocktailGlass>{glass}</CocktailGlass>
        <CocktailInfo>{info}</CocktailInfo>
        <LinkBtn to={`/cocktail/${id}`}>details</LinkBtn>
      </CocktailText>
    </CocktailItem>
  );
};
