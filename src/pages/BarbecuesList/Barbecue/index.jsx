import React from 'react';
import PropTypes from 'prop-types';

import { formatDateLess } from 'logic/date';
import { ROUTES } from 'logic/constants';
import { InfoWithIcon } from 'components/InfoWithIcon';

import budgetIcon from 'assets/img/icon-money.svg';
import membersIcon from 'assets/img/icon-people.svg';

import {
  Container,
  Header,
  Footer,
  Title,
  Date,
  FooterItem,
  LinkElement,
} from './styles';

export function Barbecue({ date, title, members, budget, id }) {
  function link() {
    return ROUTES.BARBECUE_DETAIL.replace(':id', id);
  }

  return (
    <Container as="article">
      <Header>
        <Title>
          <LinkElement to={link()}>{title}</LinkElement>
        </Title>
        <LinkElement to={link()} title={title}>
          <Date>{formatDateLess(date)}</Date>
        </LinkElement>
      </Header>
      <Footer>
        <LinkElement to={link()} title={title}>
          <FooterItem>
            <InfoWithIcon icon={membersIcon} text={members} />
          </FooterItem>
          <FooterItem>
            <InfoWithIcon icon={budgetIcon} text={`R$${budget}`} />
          </FooterItem>
        </LinkElement>
      </Footer>
    </Container>
  );
}

Barbecue.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  members: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Barbecue;
