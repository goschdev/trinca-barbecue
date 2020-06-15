import styled from 'styled-components';

import { pxToRem } from 'logic/pxToRem';
import { COLORS } from 'visual/constants';

export const Select = styled.select`
  padding: ${pxToRem(14)} ${pxToRem(20)};
  background-color: ${COLORS.white};
  border-radius: ${pxToRem(2)};
  font-style: italic;
  font-weight: normal;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(21)};
  color: ${COLORS.dark};
  border: none;
  outline-color: ${COLORS.goldLight};
  resize: none;
`;
