import React from 'react';
import PropTypes from 'prop-types';

import { membersBudget } from 'logic/membersBudget';
import { Header } from './Header';
import { Members } from './Members';

import { Container, Description } from './styles';

export function Content({ data }) {
  const { members, date, title, description, notes } = data;

  return (
    <Container>
      <Header
        title={title}
        budget={membersBudget(members)}
        members={members.length}
        date={date}
      />
      {!!description && <Description>{description}</Description>}
      {!!notes && <Description>{notes}</Description>}
      <Members data={members} />
    </Container>
  );
}

Content.propTypes = {
  data: PropTypes.shape({
    members: PropTypes.arrayOf(PropTypes.object),
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    notes: PropTypes.string,
  }).isRequired,
};

export default Content;
