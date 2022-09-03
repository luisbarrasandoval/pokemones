import randomColor from "../utils/randomColor";

const URL = "https://pokeapi.co/api/v2/pokemon";

interface getPokemonProps {
  url?: string;
  name?: string;
  id?: number;
}

const getPokemon = async ({ url, id, name }: getPokemonProps) => {
  const response = await fetch(url || `${URL}/${id || name}`);
  const data = await response.json();
  data.bgColor = randomColor();
  return data;
};

export default getPokemon;
