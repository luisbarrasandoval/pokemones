import { FC } from "react";
import { Type } from "../types/Pokemon";
import Badge from "./Badge";
import { LayoutRow } from "./Layout";

const ListTypes: FC<{ types: Type[] }> = ({ types }) => {
  return (
    <LayoutRow>
      {types.map((type, index) => (
        <Badge key={index}>{type.type.name}</Badge>
      ))}
    </LayoutRow>
  );
};

export default ListTypes;