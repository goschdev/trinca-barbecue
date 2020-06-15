import React, { useContext } from 'react';

import { BarbecueContext } from 'contexts/BarbecueContext';

import { Member } from './Member';
import { CreateMember } from './CreateMember';

import { Container } from './styles';

export function Members() {
  const { barbecue } = useContext(BarbecueContext);
  const { members } = barbecue;

  return (
    <Container>
      {members.map((member) => (
        <Member key={member.id} data={member} />
      ))}
      <CreateMember />
    </Container>
  );
}

export default Members;
