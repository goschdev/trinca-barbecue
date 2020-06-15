import styled, { css } from 'styled-components';

import { pxToRem } from 'logic/pxToRem';
import { COLORS } from 'visual/constants';

import pattern from 'assets/img/bg-pattern.svg';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.primary};
  background-image: url(${pattern});
  position: relative;
  z-index: 10;
  margin-bottom: -45px;

  ${p => p.isAuth && css`
    padding-bottom: 125px;
    margin-bottom: -100px;

    &:after {
      width: 100%;
      height: 125px;
      position: absolute;
      bottom: 0;
      content: '';
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffd836+0,ffd836+100&0+0,1+100 */
      background: -moz-linear-gradient(top,  rgba(255,216,54,0) 0%, rgba(255,216,54,1) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  rgba(255,216,54,0) 0%,rgba(255,216,54,1) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom,  rgba(255,216,54,0) 0%,rgba(255,216,54,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffd836', endColorstr='#ffd836',GradientType=0 ); /* IE6-9 */
    }
  `}
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  padding: 70px 0 100px 0;

  &, a {
    font-style: normal;
    font-size: ${pxToRem(32)};
    line-height: ${pxToRem(38)};
    font-weight: 800;
    color: ${COLORS.black};
    display: block;
  }
`;

export const LinkElement = styled(Link)`
  text-decoration: none;
`;
