import { createGlobalStyle } from 'styled-components';

import Font from '@/helpers/Font';

/**
 * Component which provides a global styles of the application. Don't contains a fonts declaraion!
 */
const Style = createGlobalStyle`
  *, *:before, *:after {
    background-repeat: no-repeat;
    box-sizing: border-box;
  }

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }

  *:focus {
    outline: none;
  }

  html,
  body {
    width: 100%;

    margin: 0;
    padding: 0;

    overflow-x: hidden;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: ${Font.default}, sans-serif;
    font-size: 16px;
    line-height: ${20 / 16};

    height: 100%;
  }

  input[type=checkbox],
  input[type=button],
  input[type=submit],
  input[type=reset],
  input[type=radio],
  input[type=file],
  button {
    cursor: pointer;
  }

  textarea,
  button,
  input {
    font-family: inherit;
  }
`;

// Export.
export default Style;
