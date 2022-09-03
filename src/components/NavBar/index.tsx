import { FC } from "react";
// import { MdFavorite, MdFilterAlt, MdSearch } from "react-icons/md";
import usePokemonContext from "../../hooks/usePokemonContext";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavLogoIcon,
  NavSearchEntry
} from "./NavBarStyles";


export interface NavBarProps {
  title: string;
  subtitle?: string;
}

const NavBar: FC<NavBarProps> = ({
  title,
  subtitle,
}) => {

  const { search, filterByName } = usePokemonContext();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <NavLogoIcon />
          <div>
            <h1 style={{ fontSize: 18 }}>{title}</h1>
            <h2 style={{ fontSize: 12 }}>{subtitle}</h2>
          </div>
        </NavLogo>

        <NavSearchEntry
          placeholder="Filtra por nombre los pokemones 😊"
          value={search}
          onChange={(e) => {
            filterByName(e.target.value);
          }}
        />

        
        {/* <NavMenu>
          <MdSearch size={32} onClick={() => {
          }}/>
          <MdFilterAlt size={32} />
          <MdFavorite size={32} />
        </NavMenu> */}
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
