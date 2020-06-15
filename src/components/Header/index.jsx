import React from 'react';

import { TEXTS } from 'logic/texts';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'logic/constants';

import { Container, Title, LinkElement } from './styles';

export function Header() {
  const { pathname } = useLocation();
  const isAuth = pathname === ROUTES.AUTH;

  return (
    <Container isAuth={isAuth}>
      <Title>
        {isAuth && <>{TEXTS.title}</>}
        {!isAuth && <LinkElement to={ROUTES.MAIN}>{TEXTS.title}</LinkElement>}
      </Title>
    </Container>
  );
}

export default Header;
