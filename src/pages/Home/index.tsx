import { useEffect } from "react";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import usePokemonContext from "../../hooks/usePokemonContext";
import { CardsGridContainer } from "./HomeStyles";

function Home() {
  const { pokes } = usePokemonContext();

  useEffect(() => {
    document.title = "Pokedex";
  }, []);


  return (
    <>
      <NavBar title="Pokemones" subtitle="Creado por Luis Barra" />
      <CardsGridContainer>
        {pokes.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </CardsGridContainer>
    </>
  );
}

export default Home;
