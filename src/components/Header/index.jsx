import React from 'react';

import { TEXTS } from 'logic/texts';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'logic/constants';

import { Container, Title } from './styles';

export function Header() {
  const { pathname } = useLocation();
  const isAuth = pathname === ROUTES.AUTH;

  return (
    <Container isAuth={isAuth}>
      <Title>{TEXTS.title}</Title>
    </Container>
  );
}

export default Header;
