import { FC } from "react";
import { MdArrowForward, MdCatchingPokemon } from "react-icons/md";
import useGetSpecies from "../hooks/useGetSpecies";
import { Pokemon } from "../types/Pokemon";
import Card from "./Card";
import { LayoutColumnCenter, LayoutRowCenter } from "./Layout";

interface PokemonListEvolutionsProps {
  pokemon: Pokemon;
}

const PokemonListEvolutions: FC<PokemonListEvolutionsProps> = ({ pokemon }) => {
  const { from, loading } = useGetSpecies(pokemon);

  if (loading) return <h1>Buscando evolutions...</h1>;

  if (!from) {
    return <h1>No es una evolución de otro</h1>;
  }

  return (
    <LayoutRowCenter>
      <Card pokemon={from} width="250px" height="350px"/>
      <LayoutColumnCenter style={{ gap: 10, margin: "0 50px" }}>
        <MdCatchingPokemon size={50} color="white" />
        <MdArrowForward size={20} color="white" />
      </LayoutColumnCenter>
      <Card pokemon={pokemon} width="250px" height="350px"/>
    </LayoutRowCenter>
  );
};

export default PokemonListEvolutions;
