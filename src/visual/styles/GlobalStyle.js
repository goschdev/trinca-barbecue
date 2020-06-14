import { createGlobalStyle } from 'styled-components';

import { COLORS } from 'visual/constants';
import { Raleway } from 'visual/fonts';

export const GlobalStyle = createGlobalStyle`
  ${Raleway}
  body, html {
    min-height: 100vh;
    background-color: ${COLORS.greyLight};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-weight: normal;
  }
  button {
    cursor: pointer;
  }
  img {
    max-width: 100%;
    display: block;
  }
`;
