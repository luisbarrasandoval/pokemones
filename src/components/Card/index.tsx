import { FC } from "react";
import { Pokemon } from "../../types/Pokemon";
import getAllImages from "../../utils/getAllImagePokemon";
import ListTypes from "../ListTypes";
import {
  CardContainer,
  CardImages,
  CardHeader as CardHeaderStyled,
  CardHP,
  CardHeaderTitleContainer,
  CardHeaderTitle,
  CardHeaderId,
} from "./CardStyles";

interface CardProps {
  pokemon: Pokemon;
  width?: string;
  height?: string;
}

const CardHeader: FC<CardProps> = ({ pokemon }) => {
  return (
    <CardHeaderStyled>
        <CardHeaderTitleContainer>
          <CardHeaderTitle>{pokemon.name}</CardHeaderTitle>
          <CardHeaderId>{pokemon.id}</CardHeaderId>
        </CardHeaderTitleContainer>
        <CardHP>{pokemon.stats[0].base_stat}</CardHP>
      </CardHeaderStyled>
  );
};

const Card: FC<CardProps> = ({ pokemon, width, height }) => {
  return (
    <CardContainer to={`/detail/${pokemon.id}`} bgColor={pokemon.bgColor} width={width} height={height}>
      <CardHeader pokemon={pokemon} />
      <CardImages images={getAllImages(pokemon)} />
      <ListTypes types={pokemon.types} />
    </CardContainer>
  );
};

export default Card;
