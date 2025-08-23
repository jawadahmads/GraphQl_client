import { createGlobalStyle } from "styled-components";

const theme = {
  hintPink: "#27212E",
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color:${theme.hintPink} ;
    color : white;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
