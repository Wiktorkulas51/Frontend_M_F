import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');
*, *::before, *::after{

    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}




html {
    font-size: 62.5%
}

body {
    font-size: 1.6rem;
    font-family: 'Rubik', sans-serif;
    font-family: 'Rubik Mono One', sans-serif;
}

`;

export default GlobalStyle;
