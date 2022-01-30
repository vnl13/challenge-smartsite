import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Gotham';
    font-weight: 300;
    src: url('/fonts/gotham-light.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Gotham';
    font-weight: 400;
    src: url('/fonts/gotham-book.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Gotham';
    font-weight: 600;
    src: url('/fonts/gotham-bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Gotham';
    font-weight: 700;
    src: url('/fonts/gotham-black.woff2') format('woff2');
  }

  :root {
    --dark-grey: #333333;
    --light-grey: #808080;
    --yellow: #FFB612;
    --red: #dc0a17;
    --green: #2FC022;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Gotham';
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  ul, ol {
    padding: 0;
  }


  button, label {
    cursor: pointer;
  }

  img, svg {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }

`;
