import React from 'react';

import logoTrinca from 'assets/img/trinca-logo.svg';
import { Container, Logo } from './styles';
import { TEXTS } from 'logic/texts';

export function Footer() {
  return (
    <Container>
      <Logo title={TEXTS.footer.title} src={logoTrinca} alt={TEXTS.footer.imgAlt} />
    </Container>
  );
}

export default Footer;
