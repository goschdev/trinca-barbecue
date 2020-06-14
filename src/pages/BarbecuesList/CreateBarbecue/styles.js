import styled from 'styled-components';

import { Card } from 'visual/styles/Card';
import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled(Card)`
  background-color: ${COLORS.grey};
  display: grid;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(21)};
  line-height: ${pxToRem(25)};
  text-align: center;
  border: none;
  outline-color: ${COLORS.goldLight};
`;

export const Icon = styled.img`
  margin: 0 auto ${pxToRem(8)} auto;
`;
