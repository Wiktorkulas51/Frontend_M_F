import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{

    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
    margin: 0;
  
}




html {
    font-size: 62.5%;
   

}

body {
    overflow: hidden;
    font-size: 1.6rem;
    font-family: 'Rubik', sans-serif;
}

`;

export default GlobalStyle;
