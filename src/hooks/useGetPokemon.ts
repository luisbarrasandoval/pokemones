import { useEffect, useState } from "react";
import getPokemon from "../services/getPokemon";
import { Pokemon } from "../types/Pokemon";
import usePokemonContext from "./usePokemonContext";

interface useGetPokemonProps {
  id?: number;
  name?: string;
}

const useGetPokemon = ({ id, name }: useGetPokemonProps) => {
  const { pokes } = usePokemonContext();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {

    let poke;
    if (id) {
      poke = pokes.find((poke) => poke.id === id);
    } else {
      poke = pokes.find((poke) => poke.name === name);
    }

    if (poke) {
      document.title = poke.name;
      return setPokemon(poke);
    }

    // TODO: Agregar al contexto
    getPokemon({ id: id })
      .then((poke) => {
        document.title = poke.name;
        setPokemon(poke);
      })
      .catch((err) => console.log(err));
  }, [pokes, id, name]);

  return { pokemon, pokes };
};

export default useGetPokemon;
