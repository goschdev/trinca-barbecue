import styled from 'styled-components';

import { pxToRem } from 'logic/pxToRem';
import { COLORS } from 'visual/constants';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img``;

export const Text = styled.span`
  margin-left: ${pxToRem(10)};
  font-style: normal;
  font-weight: 500;
  font-size: ${pxToRem(21)};
  line-height: ${pxToRem(25)};
  color: ${COLORS.black};
`;
