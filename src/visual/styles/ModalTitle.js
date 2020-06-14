import styled from 'styled-components';
import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const ModalTitle = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: ${pxToRem(32)};
  line-height: ${pxToRem(38)};
  color: ${COLORS.black};
  text-align: center;
  cursor: default;
`;
