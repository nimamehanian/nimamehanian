import { createGlobalStyle } from 'styled-components';
import BrandonBld from 'fonts/brandon/brandon-bold.woff2';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    outline: none;
    font-size: 10px;
    background: #f6f9fc;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  @font-face {
    font-family: 'Brandon Bld';
    src: url(${BrandonBld});
  }
`;

export default GlobalStyles;
