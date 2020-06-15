import React, { useContext, useState } from 'react';

import { BarbecueContext } from 'contexts/BarbecueContext';

import { Member } from './Member';
import { CreateMember } from './CreateMember';
import { EditMemberModal } from './EditMemberModal';

import { Container } from './styles';

export function Members() {
  const { barbecue, membersLoading } = useContext(BarbecueContext);
  const { members } = barbecue;
  const [editOpened, setEditOpened] = useState(false);
  const [editSelected, setEditSelected] = useState({});

  function closeModal() {
    setEditOpened(false);
  }

  function openModal(data) {
    setEditSelected(data);
    setEditOpened(true);
  }

  return (
    <Container isLoading={membersLoading}>
      {members.map((member) => (
        <Member key={member.id} data={member} toEdit={openModal} />
      ))}
      <CreateMember />
      <EditMemberModal
        opened={editOpened}
        originalData={editSelected}
        closeModal={closeModal}
      />
    </Container>
  );
}

export default Members;
