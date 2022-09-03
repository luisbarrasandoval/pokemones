import styled from "styled-components";

export const CardsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: masonry;
  grid-gap: 10px;
  padding: 20px;
  // max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }
`;