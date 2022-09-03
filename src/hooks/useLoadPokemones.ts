import { useEffect, useReducer } from "react";
import { Actions, PokemonReducer } from "../contexts/PokemonsContext";
import getPokemons from "../services/getPokemons";
import { Pokemon } from "../types/Pokemon";

const useCreateAndLoadPokemones = (limit: number = 25) => {
  const [pokes, distpach] = useReducer(PokemonReducer, {
    loading: true,
    pokes: [],
    result: [],
    search: "",
    setPokes: () => {},
    filterByName: () => {},
    setLoading: () => {},
  });

  const setPokes = (poke: Pokemon | Pokemon[]) => {
    distpach({ type: Actions.SAVE_POKEMONES, payload: poke });
  };

  const filterByName = (name: string) => {
    distpach({ type: Actions.FILTER_BY_NAME, payload: { name } });
  };

  const setLoading = (loading: boolean) => {
    distpach({ type: Actions.SET_LOADING, payload: { loading } });
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokes = await getPokemons(limit);
      setPokes(pokes);
    };

    fetchPokemons();
  }, [limit]);

  return { pokes, setPokes, filterByName, setLoading };
};

export default useCreateAndLoadPokemones;
