import { useEffect, useState } from "react";
import styled from "styled-components";


export const FilterEntryContainer = styled.div`
  width: 100%;
`;


export const FilterEntryInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
  outline: none;
`;


const FilterEntry = () => {
  return (
    <FilterEntryContainer>
      <FilterEntryInput placeholder="Filtra por nombre" />
    </FilterEntryContainer>
  )
}

export default FilterEntry;