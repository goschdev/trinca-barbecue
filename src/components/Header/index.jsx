import React from 'react';
import { useLocation } from 'react-router-dom';

import { TEXTS } from 'logic/texts';
import { ROUTES } from 'logic/constants';
import { Wrapper } from 'visual/styles/Wrapper';

import { Container, Title, LinkElement } from './styles';

export function Header() {
  const { pathname } = useLocation();
  const isAuth = pathname === ROUTES.AUTH;

  return (
    <Container isAuth={isAuth}>
      <Wrapper>
        <Title>
          {isAuth && <>{TEXTS.title}</>}
          {!isAuth && <LinkElement to={ROUTES.MAIN}>{TEXTS.title}</LinkElement>}
        </Title>
      </Wrapper>
    </Container>
  );
}

export default Header;
