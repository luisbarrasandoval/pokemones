import { createContext } from "react";
import useCreateAndLoadPokemones from "../hooks/useLoadPokemones";
import LoadingPage from "../pages/LoadingPage";
import { Pokemon } from "../types/Pokemon";

// TODO: Separar los types, actions, reducer y providers en archivos separados
// TODO: context selex

export type PokemonContextType = {
  pokes: Pokemon[];  // TODO: rename to viewPokemons
  result: Pokemon[]; // TODO: rename to allPokemons
  loading: boolean;
  search: string;
  setLoading: (loading: boolean) => void;
  setPokes: (poke: Pokemon | Pokemon[]) => void;
  filterByName: (name: string) => void;
};

const PokemonContext = createContext<PokemonContextType | null>(null);

export enum Actions {
  SAVE_POKEMONES = "SAVE_POKEMONES",
  FILTER_BY_NAME = "FILTER_BY_NAME",
  SET_LOADING = "SET_LOADING",
}

export const PokemonReducer = (state: PokemonContextType, action: {type: Actions, payload: any}) => {
  switch (action.type) {
    case Actions.SAVE_POKEMONES:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          pokes: action.payload,
          result: action.payload,
          loading: false,
        };
      }
      return {
        ...state,
        pokes: [...state.pokes],
      };

    case Actions.FILTER_BY_NAME:
      return {
        ...state,
        search: action.payload.name,
        pokes: state.result.filter((poke) => poke.name.includes(action.payload.name))
      }

      case Actions.SET_LOADING:
        return {
          ...state,
          loading: action.payload
        }

    default:
      return state;
  }

};

const PokemonProvider = ({ children }: any) => {
  
  const { pokes, setPokes, filterByName } = useCreateAndLoadPokemones();

  if (pokes.loading) {
    return <LoadingPage />
  }

  return (
    <PokemonContext.Provider value={{...pokes, setPokes, filterByName }}> 
      {children}
    </PokemonContext.Provider>
  );
}


export { PokemonContext, PokemonProvider };
