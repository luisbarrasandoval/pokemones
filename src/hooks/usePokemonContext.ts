import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonsContext";

const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (context === undefined || context == null ) {
    throw new Error("No se encontró el provider de Pokemons");
  }

  return context;
};

export default usePokemonContext;