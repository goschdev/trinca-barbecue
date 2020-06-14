import React, { useState } from 'react';

import barbecueIcon from 'assets/img/icon-barbecue.svg';
import { TEXTS } from 'logic/texts';
import { Container, Icon } from './styles';
import { CreateBarbecueModal } from './CreateBarbecueModal';

export function CreateBarbecue() {
  const [opened, setOpened] = useState(false);

  function openModal() {
    setOpened(true);
  }

  function closeModal() {
    setOpened(false);
  }

  return (
    <>
      <Container as="button" onClick={openModal}>
        <Icon src={barbecueIcon} aria-hidden />
        {TEXTS.barbecuesList.create}
      </Container>
      <CreateBarbecueModal opened={opened} closeModal={closeModal} />
    </>
  );
}

export default CreateBarbecue;
