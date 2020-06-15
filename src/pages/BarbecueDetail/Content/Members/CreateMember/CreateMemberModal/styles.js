import styled from 'styled-components';

import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div``;

export const Form = styled.form`
  display: grid;
  grid-row-gap: ${pxToRem(20)};
`;
