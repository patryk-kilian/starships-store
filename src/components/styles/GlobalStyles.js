import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  :root {
    --maxWidth: 1200px;
    --color: orangered;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    min-height: 100vh;
    background: var(--color);
    line-height: 1.5;
    font-family: 'Montserrat',sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

`;

export default GlobalStyles;
