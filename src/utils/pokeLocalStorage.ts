import { Pokemon } from "../types/Pokemon";

const saveLocalStorage = (pokes: Pokemon[]) => {
  localStorage.setItem("pokes", JSON.stringify(pokes));
};

const getPokesLocalStorage = () => {
  const pokes = localStorage.getItem("pokes");
  if (pokes) {
    return JSON.parse(pokes);
  }
  return [];
};

export { saveLocalStorage, getPokesLocalStorage };
