import { createGlobalStyle } from 'styled-components';
import BrandonBld from 'fonts/brandon/brandon-bold.woff2';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    outline: none;
    font-size: 10px;
    background: #1d1d1d;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: 'Brandon Bld';
    src: url(${BrandonBld});
  }
`;

export default GlobalStyles;
