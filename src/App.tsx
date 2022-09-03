import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import DetailScreen from "./pages/DetailScreen";
import { PokemonProvider } from "./contexts/PokemonsContext";
import Home from "./pages/Home";
import { motion } from "framer-motion";
import NotFound from "./pages/NotFound";
import LoadingPage from "./pages/LoadingPage";

const PageLayoutAnimation = ({ children }: any) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      animate={{ opacity: 1}}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <PageLayoutAnimation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<DetailScreen />} />
            <Route path="/load" element={<LoadingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageLayoutAnimation>
      </PokemonProvider>
    </BrowserRouter>
  );
}

export default App;
