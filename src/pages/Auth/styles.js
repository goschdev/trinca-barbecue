import styled, { createGlobalStyle } from 'styled-components';

import { COLORS } from 'visual/constants';

export const Container = styled.main`
  position: relative;
  z-index: 10;
`;

export const Form = styled.form`
  display: grid;
  grid-row-gap: 35px; 
`;

export const FormItem = styled.div`
  display: grid;
`;

export const SetBodyBackground = createGlobalStyle`
  body {
    background-color: ${COLORS.primary};
  }
`;
