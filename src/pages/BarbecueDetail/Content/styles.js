import styled from 'styled-components';

import { Card } from 'visual/styles/Card';
import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled(Card)`
  display: grid;
  grid-row-gap: ${pxToRem(40)};
`;

export const Description = styled.p`
  font-style: italic;
  font-weight: normal;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(21)};
  color: ${COLORS.dark};
`;
