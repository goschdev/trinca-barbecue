import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { Member } from './Member';

export function Members({ data }) {
  return (
    <Container>
      {data.map((member) => (
        <Member key={member.id} data={member} />
      ))}
    </Container>
  );
}

Members.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Members;
