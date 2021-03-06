import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { TEXTS } from 'logic/texts';
import { BarbecueContext } from 'contexts/BarbecueContext';
import { Container, LeftColumn, TogglePaid, Name, Budget } from './styles';

export function Member({ data, toEdit }) {
  const { toggleMemberPaid } = useContext(BarbecueContext);
  const { id, name, budget, paid } = data;

  function togglePaid() {
    toggleMemberPaid(id, !paid);
  }

  return (
    <Container>
      <LeftColumn>
        {paid && (
          <TogglePaid onClick={togglePaid} paid={paid}>
            {TEXTS.member.markAsNotPaid}
          </TogglePaid>
        )}
        {!paid && (
          <TogglePaid onClick={togglePaid} paid={paid}>
            {TEXTS.member.markAsPaid}
          </TogglePaid>
        )}
        <Name onClick={() => toEdit(data)}>{name}</Name>
      </LeftColumn>
      <Budget paid={paid} as="span">{`R$ ${budget}`}</Budget>
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
  toEdit: PropTypes.func.isRequired,
};

export default Member;
