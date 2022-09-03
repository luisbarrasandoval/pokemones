import { Pokemon } from "../types/Pokemon";

function getAllImages(pokemon: Pokemon, images: string[] = []) {
  if (pokemon.sprites.other?.home?.front_default) {
    images.push(pokemon.sprites.other.home.front_default);
  }
  if (pokemon.sprites.other?.dream_world?.front_default) {
    images.push(pokemon.sprites.other.dream_world.front_default);
  }
  if (pokemon.sprites.front_default) {
    images.push(pokemon.sprites.front_default);
  }
  if (pokemon.sprites.front_shiny) {
    images.push(pokemon.sprites.front_shiny);
  }

  if (pokemon.sprites.other) {
    Object.values(pokemon.sprites.other).forEach((value) => {
      if (typeof value === "string") {
        images.push(value);
      } else if (typeof value === "object") {
        Object.values(value).forEach((value) => {
          if (typeof value === "string" && value.trim() !== "") {
            images.push(value);
          }
        });
      }
    });
  }

  return images;
}

export default getAllImages;
