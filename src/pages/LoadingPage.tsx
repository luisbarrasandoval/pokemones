import Bola from "../components/Bola";
import { LayoutColumnCenter } from "../components/Layout";

const LoadingPage = () => {
  return (
    <LayoutColumnCenter style={{
      height: "100vh",
      gap: 50,
    }}>
      <Bola />
      <h1>Loading...</h1>
    </LayoutColumnCenter>
  );
}

export default LoadingPage;