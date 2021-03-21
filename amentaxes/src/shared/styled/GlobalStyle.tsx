import styled from "styled-components";

export const WrapperContentStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 2em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  font-size: 3.2vh;
  margin-bottom: 2em;
  #userName {
    font-weight: bold;
    color: black;
  }
`;
export const WelcomeMessage = styled.span`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;
export const CarsAvalaible = styled.div`
  display: flex;
  margin-top: 2em;
  flex-wrap: wrap;
  justify-content: space-around;
`;
