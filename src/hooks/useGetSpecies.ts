import { useEffect, useState } from "react";
import getPokemon from "../services/getPokemon";
import getSpecies from "../services/getSpecies";
import { Pokemon } from "../types/Pokemon";
import usePokemonContext from "./usePokemonContext";

const useGetSpecies = (pokemon: Pokemon) => {
  const { pokes } = usePokemonContext();
  const [from, setFrom] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSpecies(pokemon.species.url).then((specie) => {
      const name = specie.evolves_from_species?.name;
      const PokemonFrom = pokes.find((poke) => poke.name === name);
      if (PokemonFrom) {
        setLoading(false);
        return setFrom(PokemonFrom);
      }

      getPokemon({ name })
        .then((poke) => setFrom(poke))
        .catch((err) => console.log(err));
      setLoading(false);
    });
  }, [pokes, pokemon]);

  return { from, loading };
};

export default useGetSpecies;
