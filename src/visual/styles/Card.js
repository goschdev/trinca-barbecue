import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Card = styled.div`
  background-color: ${COLORS.white};
  padding: 25px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: ${pxToRem(2)};
`;
