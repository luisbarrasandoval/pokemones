import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePokemonContext from "./usePokemonContext";

/* 
 * ESC AND BACKSPACE TO GO BACK TO HOME
 * ARROW LEFT AND RIGHT TO NAVIGATE BETWEEN POKEMONS
 */
const useKeyNavigation = (id: number) => {
  const { pokes } = usePokemonContext();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Backspace") {
        navigate("/");
      } else if (event.key === "ArrowLeft") {
        if (id > 1) {
          navigate(`/detail/${id - 1}`);
        }
      } else if (event.key === "ArrowRight") {
          navigate(`/detail/${id + 1}`);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [id, pokes, navigate]);

  return;
};

export default useKeyNavigation;
