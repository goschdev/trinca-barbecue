import React from 'react';

import barbecueIcon from 'assets/img/icon-barbecue.svg';
import { TEXTS } from 'logic/texts';
import { Container, Icon } from './styles';

export function CreateBarbecue() {
  return (
    <Container as="button">
      <Icon src={barbecueIcon} aria-hidden />
      {TEXTS.barbecuesList.create}
    </Container>
  );
}

export default CreateBarbecue;
