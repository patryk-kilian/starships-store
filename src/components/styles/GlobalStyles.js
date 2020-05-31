import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

  :root {
    --maxWidth: 1200px;
    --white: #fff;
    --greyLight: #d3d3d3;
    --greyDark: #808080;
    --orange: #ea5d1f;
    --orangeLight: #f08a5d;
    --purple: #6a2c70;
    --purpleLight: #983fa1;
    --textDark: #190b1b;
    --shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 3px 5px -1px rgba(0, 0, 0, 0.20);
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: 'Montserrat',sans-serif;
    color: var(--textDark);
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
