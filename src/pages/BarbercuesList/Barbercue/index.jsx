import React from 'react';
import PropTypes from 'prop-types';

import budgetIcon from 'assets/img/icon-money.svg';
import membersIcon from 'assets/img/icon-people.svg';
import { formatDateLess } from 'logic/date';
import {
  Container,
  Header,
  Footer,
  Title,
  Date,
  FooterItem,
  Icon,
  FooterItemText,
} from './styles';

export function Barbercue({ date, title, members, budget }) {
  return (
    <Container as="article">
      <Header>
        <Title>{title}</Title>
        <Date>{formatDateLess(date)}</Date>
      </Header>
      <Footer>
        <FooterItem>
          <Icon src={membersIcon} aria-hidden />
          <FooterItemText>{members}</FooterItemText>
        </FooterItem>
        <FooterItem>
          <Icon src={budgetIcon} aria-hidden />
          <FooterItemText>{budget}</FooterItemText>
        </FooterItem>
      </Footer>
    </Container>
  );
}

Barbercue.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  members: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
};

export default Barbercue;
