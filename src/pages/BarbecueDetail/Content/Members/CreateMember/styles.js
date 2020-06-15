import styled from 'styled-components';
import { pxToRem } from 'logic/pxToRem';
import { COLORS } from 'visual/constants';

export const Container = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 8px;
  width: 100%
`;

export const Icon = styled.img`
  margin-right: ${pxToRem(20)};
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(21)};
  line-height: ${pxToRem(25)};
  color: ${COLORS.dark};
`;
