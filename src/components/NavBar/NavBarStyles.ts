import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";


export const Nav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  background: black;
  border-bottom: 1px solid #333;
  overflow: hidden;
  z-index: 10;
  padding: 1rem 0rem;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px auto;
  width: 100%;
  padding: 0 30px;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  color: #fff;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  gap: 10px;
`;

export const NavLogoIcon = styled(MdCatchingPokemon)`
  width: 40px;
  height: 40px;
`;

export const NavMenu = styled.div`
  color: #fff;
  display: flex;
  gap: 10px;
`;


export const NavSearchEntry = styled.input`
  flex: 1;
  background: transparent;
  border: 1px solid #333;
  color: #fff;
  font-size: 1rem;
  outline: none;
  padding: 15px;
  border-radius: 5px;
  width: 100%;
  @media screen and (max-width: 768px) {
    border: none;
  }
`;
