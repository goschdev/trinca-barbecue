import styled from 'styled-components';

import { Card } from 'visual/styles/Card';
import { pxToRem } from 'logic/pxToRem';
import { COLORS } from 'visual/constants';

export const Container = styled(Card)``;

export const Header = styled.header`
  display: grid;
`;

export const Title = styled.h3`
  order: 2;
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(21)};
  line-height: ${pxToRem(25)};
  color: ${COLORS.dark};
`;

export const Date = styled.span`
  order: 1;
  font-style: normal;
  font-weight: 800;
  font-size: ${pxToRem(28)};
  line-height: ${pxToRem(33)};
  color: ${COLORS.black};
  margin-bottom: ${pxToRem(8)};
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: ${pxToRem(50)};
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: flex-end;
  }
`;

export const Icon = styled.img``;

export const FooterItemText = styled.span`
  margin-left: ${pxToRem(10)};
  font-style: normal;
  font-weight: 500;
  font-size: ${pxToRem(21)};
  line-height: ${pxToRem(25)};
  color: ${COLORS.black};
`;
