import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`  
  *, *:before, *:after{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    outline: none; 
  }

  .todos-app {
    max-width: 600px;
    margin: 0 auto;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-size: 14px;
    color: #000000;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
  }
`;

export default GlobalStyles;
