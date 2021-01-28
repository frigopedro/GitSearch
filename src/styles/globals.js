import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #1F1D2B;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
    overflow-x: hidden; //horizontal
}
`;

export default GlobalStyles;
