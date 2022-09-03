import { FC } from "react";
import { DetailProperty, DetailPropertyText } from "../pages/DetailScreen/DetailStyle";
import Badge from "./Badge";

interface PokemonPropertieProps {
  name: string;
  value: string | number;
  color: string;
}

const PokemonPropertie: FC<PokemonPropertieProps> = ({ name, value, color }) => {
  return (
    <DetailProperty bgColor={color}>
      <DetailPropertyText>{name}</DetailPropertyText>
      <Badge>{value}</Badge>
    </DetailProperty>
  );
};

export default PokemonPropertie;
