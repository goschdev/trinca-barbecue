import React from 'react';
import PropTypes from 'prop-types';

import { TEXTS } from 'logic/texts';
import { Container, LeftColumn, TogglePaid, Name, Budget } from './styles';

export function Member({ data }) {
  const { name, budget, paid } = data;

  return (
    <Container>
      <LeftColumn>
        {paid && (
          <TogglePaid paid={paid}>{TEXTS.member.markAsNotPaid}</TogglePaid>
        )}
        {!paid && (
          <TogglePaid paid={paid}>{TEXTS.member.markAsPaid}</TogglePaid>
        )}
        <Name>{name}</Name>
      </LeftColumn>
      <Budget paid={paid}>{`R$ ${budget}`}</Budget>
    </Container>
  );
}

Member.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    budget: PropTypes.number,
    paid: PropTypes.bool,
    needDrink: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }).isRequired,
};

export default Member;
