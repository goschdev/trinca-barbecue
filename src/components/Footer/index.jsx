import React from 'react';

import logoTrinca from 'assets/img/trinca-logo.svg';
import { TEXTS } from 'logic/texts';
import { Container, Logo } from './styles';

export function Footer() {
  return (
    <Container>
      <Logo
        title={TEXTS.footer.title}
        src={logoTrinca}
        alt={TEXTS.footer.imgAlt}
      />
    </Container>
  );
}

export default Footer;
