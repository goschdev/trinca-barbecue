import styled, { keyframes, css, createGlobalStyle } from 'styled-components';

import { COLORS } from 'visual/constants';
import { Wrapper } from 'visual/styles/Wrapper';
import { pxToRem } from 'logic/pxToRem';

const fadeIn = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`

export const Container = styled.section`
  position: fixed;
  background-color: ${COLORS.primary};
  padding: ${pxToRem(70)} 0;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0%;
  right: 0;
  opacity: 0;
  pointer-events: none;

  ${p =>
    p.opened && css`
      animation: ${fadeIn} 0.2s ease-in;
      opacity: 1;
      pointer-events: auto;
    `}
`;

export const Scroll = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export const Content = styled(Wrapper)`
  display: grid;
  grid-row-gap: ${pxToRem(20)};
`;

export const GlobalHidden = createGlobalStyle`
  ${p => p.opened && css`
    body, html {
      overflow: hidden;
    }
  `}
`;
