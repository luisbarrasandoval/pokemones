import { PokemonSpecies } from "../types/Pokemon";

const getSpecies = async (url: string) => {
  const response = await fetch(url);
  const data: PokemonSpecies = await response.json();
  return data;
};

export default getSpecies;