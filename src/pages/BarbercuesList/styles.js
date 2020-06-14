import styled, { css } from 'styled-components';

import { pxToRem } from 'logic/pxToRem';
import { tabletDesktop } from 'visual/medias';

export const Container = styled.main`
  position: relative;
  z-index: 10;
`;

export const HiddenTitle = styled.h2`
  position: absolute;
  left: -999pc;
  top: -999pc;
`;

export const List = styled.div`
  display: grid;
  grid-gap: ${pxToRem(25)};

  ${tabletDesktop(css`
    grid-template-columns: 1fr 1fr;
  `)}
`;
