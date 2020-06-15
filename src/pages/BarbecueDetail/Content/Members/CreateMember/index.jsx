import React, { useState } from 'react';

import { TEXTS } from 'logic/texts';

import plusIcon from 'assets/img/plus.svg';
import { CreateMemberModal } from './CreateMemberModal';
import { Container, Icon, Text } from './styles';

export function CreateMember() {
  const [opened, setOpened] = useState(false);

  function openModal() {
    setOpened(true);
  }

  function closeModal() {
    setOpened(false);
  }

  return (
    <>
      <Container onClick={openModal}>
        <Icon src={plusIcon} aria-hidden />
        <Text>{TEXTS.barbecueDetail.createMember}</Text>
      </Container>
      <CreateMemberModal opened={opened} closeModal={closeModal} />
    </>
  );
}

export default CreateMember;
