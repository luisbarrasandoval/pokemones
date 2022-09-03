import { FC } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useKeyNavigation from "../../hooks/useKeyNavigation";

export const ButtonNavigationContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  position: absolute;
  background: "transparent";
`;

interface ButtonNavigationProps {
  id: number;
}

const ButtonNavigation: FC<ButtonNavigationProps> = ({ id }) => {
  useKeyNavigation(id);
  return (
    <ButtonNavigationContainer>
      <Link to={`/detail/${id - 1}`}>
        {id > 1 && (
          <MdKeyboardArrowLeft
            size={40}
            color={"#fff"}
            style={{ cursor: "pointer" }}
          />
        )}
      </Link>
      <Link to={`/detail/${id + 1}`}>
        <MdKeyboardArrowRight
          size={40}
          color={"#fff"}
          style={{ cursor: "pointer" }}
        />
      </Link>
    </ButtonNavigationContainer>
  );
};

export default ButtonNavigation;
