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
    font-family: "Fira Code";
    background-color:${theme.hintPink} ;
    color : white;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }


.hljs {
  background: transparent !important;
}
html::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  margin: 0.4rem;
  border-radius: 2px;
}
html::-webkit-scrollbar-corner {
  background: #191919;
  border-bottom-right-radius: 50%;
}

html::-webkit-scrollbar-thumb {
  background: "#4e4e4e";
  border-radius: 25px;
  opacity: 5%;
}

html::-webkit-scrollbar-track {
  background-color: "#191919";
  opacity: 10%;
}
`;

export default GlobalStyle;
