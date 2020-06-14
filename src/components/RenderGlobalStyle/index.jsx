import React from 'react';
import { useLocation } from 'react-router-dom';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { ROUTES } from 'logic/constants';

export function RenderGlobalStyle() {
  const { pathname } = useLocation();
  const isAuth = pathname === ROUTES.AUTH;

  return <GlobalStyle primaryBackground={isAuth} />;
}

export default RenderGlobalStyle;
