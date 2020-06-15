import React from 'react';
import PropTypes from 'prop-types';

import { Member } from './Member';
import { CreateMember } from './CreateMember';

import { Container } from './styles';

export function Members({ data }) {
  return (
    <Container>
      {data.map((member) => (
        <Member key={member.id} data={member} />
      ))}
      <CreateMember />
    </Container>
  );
}

Members.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Members;
