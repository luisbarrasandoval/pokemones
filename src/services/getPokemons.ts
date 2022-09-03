import getPokemon from "./getPokemon";

const getPokemons = async (limit: number, offset: number = 0) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const data = await response.json();
  const pokes = data.results.map(async (poke: any) => {
    const pokemon = await getPokemon({ url: poke.url });
    return pokemon;
  });

  return Promise.all(pokes);
};

export default getPokemons;
