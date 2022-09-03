import { FC } from "react";
import { DetailImage } from "../pages/DetailScreen/DetailStyle";
import { Pokemon } from "../types/Pokemon";
import getAllImages from "../utils/getAllImagePokemon";
import HomeButton from "./HomeButton";
import { LayoutColumn, LayoutRowCenter } from "./Layout";


const ListHeaderImagePokemon: FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const images = getAllImages(pokemon);
  return (
    <LayoutColumn>
      <HomeButton />
      <LayoutRowCenter>
        {images.map((image, index) => (
          <DetailImage key={index} src={image} alt={pokemon.name} />
        ))}
      </LayoutRowCenter>
    </LayoutColumn>
  );
};

export default ListHeaderImagePokemon;
