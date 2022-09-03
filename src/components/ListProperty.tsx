import { FC } from "react";
import { DetailPropertyContainer } from "../pages/DetailScreen/DetailStyle";
import { Pokemon } from "../types/Pokemon";
import PokemonPropertie from "./Property";

const ListPokemonProperties: FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <DetailPropertyContainer>
      {pokemon.stats.map((stat, index) => (
        <PokemonPropertie
          key={index}
          name={stat.stat.name}
          value={stat.base_stat}
          color={pokemon.bgColor}
        />
      ))}

      <PokemonPropertie name="Altura" value={pokemon.height} color={pokemon.bgColor} />
      <PokemonPropertie name="Peso" value={pokemon.weight} color={pokemon.bgColor} />

      {pokemon.abilities.map((ability, index) => (
        <PokemonPropertie
          key={index}
          name={ability.ability.name}
          value={ability.is_hidden ? "Oculta" : "Visible"}
          color={"white"}
        />
      ))}
    </DetailPropertyContainer>
  );
};

export default ListPokemonProperties;
