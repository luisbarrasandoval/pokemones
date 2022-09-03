import styled from "styled-components";

export const LayoutRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const LayoutColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const LayoutRowCenter = styled(LayoutRow)`
  justify-content: center;
  align-items: center;
`;

export const LayoutColumnCenter = styled(LayoutRowCenter)`
  flex-direction: column;
`;