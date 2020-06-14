import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Label = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(21)};
  line-height: ${pxToRem(25)};
  color: ${COLORS.dark};
  padding-bottom: 16px;
`;
