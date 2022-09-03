import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <Link
      to="/"
      style={{
        position: "absolute",
        cursor: "pointer",
        top: "25px",
      }}
    >
      <MdHome size={32} color="white" />
    </Link>
  );
}
