import { FC } from "react";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Bola from "../components/Bola";
import { LayoutColumnCenter } from "../components/Layout";

const NotFoundContainer = styled(LayoutColumnCenter)`
  height: 100vh;
  width: 100vw;
  gap: 50px;
`;

const NotFound: FC = () => {
  return (
    <NotFoundContainer>
      <h1>NOT FOUND</h1>
      <Bola />
      <Link to="/">
        <MdHome size={50} fontSize={32} color="white" />
      </Link>
    </NotFoundContainer>
  );
};

export default NotFound;
