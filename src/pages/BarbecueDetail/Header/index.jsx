import React from 'react';
import PropTypes from 'prop-types';

import { formatDateTime } from 'logic/date';
import { InfoWithIcon } from 'components/InfoWithIcon';

import budgetIcon from 'assets/img/icon-money.svg';
import membersIcon from 'assets/img/icon-people.svg';

import {
  Container,
  LeftColumn,
  Title,
  DateTime,
  RightColumn,
  RightItem,
} from './styles';

export function Header({ title, date, members, budget }) {
  return (
    <Container>
      <LeftColumn>
        <Title>{title}</Title>
        <DateTime>{formatDateTime(date)}</DateTime>
      </LeftColumn>
      <RightColumn>
        <RightItem>
          <InfoWithIcon icon={membersIcon} text={members} />
        </RightItem>
        <RightItem>
          <InfoWithIcon icon={budgetIcon} text={`R$${budget}`} />
        </RightItem>
      </RightColumn>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  members: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
};

export default Header;
