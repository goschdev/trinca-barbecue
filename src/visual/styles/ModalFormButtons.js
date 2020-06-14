import styled from 'styled-components';

import { pxToRem } from 'logic/pxToRem';

export const ModalFormButtons = styled.div`
  display: grid;
  grid-row-gap: ${pxToRem(10)};
`;
