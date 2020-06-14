import styled from 'styled-components';
import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const LeftColumn = styled.div`
  display: grid;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

export const Title = styled.h2`
  order: 2;
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(36)};
  line-height: ${pxToRem(42)};
  color: ${COLORS.dark};
  margin-top: 8px;
`;

export const DateTime = styled.span`
  order: 1;
  font-style: normal;
  font-weight: 800;
  font-size: ${pxToRem(28)};
  line-height: ${pxToRem(33)};
  color: ${COLORS.black};
`;

export const RightItem = styled.div``;

export const RightItemIcon = styled.img``;

export const RightItemText = styled.span``;
