import { FC } from "react";
import { useParams } from "react-router-dom";
import ButtonNavigation from "../../components/ButtonNavigation";
import { LayoutColumnCenter } from "../../components/Layout";
import {
  DetailContainer,
  DetailHeader,
  DetailHeaderInfo,
  DetailTitle,
} from "./DetailStyle";

import LoadingPage from "../LoadingPage";
import ListProperties from "../../components/ListProperty";
import useGetPokemon from "../../hooks/useGetPokemon";
import ListHeaderImagePokemon from "../../components/ListHeaderImagePokemon";
import ListTypes from "../../components/ListTypes";
import PokemonListEvolutions from "../../components/PokemonListEvolutions";

const DetailScreen: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { pokemon } = useGetPokemon({ id: Number(id) });

  if (!pokemon) {
    return <LoadingPage />;
  }

  return (
    <DetailContainer>
      <DetailHeader bgColor={pokemon.bgColor}>
        <ListHeaderImagePokemon pokemon={pokemon} />
      </DetailHeader>

      <DetailHeaderInfo>
        <DetailTitle bgColor={pokemon.bgColor}>{pokemon.name}</DetailTitle>
        <ListTypes types={pokemon.types} />
        <ButtonNavigation id={pokemon.id} />
      </DetailHeaderInfo>

      <LayoutColumnCenter>
        <ListProperties pokemon={pokemon} />
      </LayoutColumnCenter>

      <PokemonListEvolutions pokemon={pokemon} />
    </DetailContainer>
  );
};

export default DetailScreen;
