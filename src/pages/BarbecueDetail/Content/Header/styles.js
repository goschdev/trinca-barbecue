import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { mobile, tabletDesktop } from 'visual/medias';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LeftColumn = styled.div`
  display: grid;

  ${mobile(css`
    width: 100%;
  `)}
`;

export const RightColumn = styled.div`
  ${tabletDesktop(css`
    display: flex;
    justify-content: space-around;
    flex-flow: column;
  `)}

  ${mobile(css`
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${pxToRem(15)};
    margin-top: ${pxToRem(10)}
  `)}
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
