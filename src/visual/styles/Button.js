import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Button = styled.button`
  padding: ${pxToRem(14)} ${pxToRem(20)};
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(21)};
  color: ${COLORS.white};
  border-radius: ${pxToRem(18)};
  background-color: ${COLORS.black};
  border: none;
`;
