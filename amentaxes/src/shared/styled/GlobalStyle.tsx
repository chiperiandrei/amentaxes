import styled from "styled-components";

export const UsersWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  background-color: red;
`;

export const WrapperContentStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 2em;
`;
