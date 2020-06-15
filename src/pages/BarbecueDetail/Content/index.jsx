import React, { useContext } from 'react';

import { membersBudget } from 'logic/membersBudget';
import { Wrapper } from 'visual/styles/Wrapper';
import { BarbecueContext } from 'contexts/BarbecueContext';
import { Header } from './Header';
import { Members } from './Members';

import { Container, Description } from './styles';

export function Content() {
  const { barbecue, loaded } = useContext(BarbecueContext);
  const { members, date, title, description, notes } = barbecue;

  return (
    <Wrapper>
      {loaded && (
        <Container>
          <Header
            title={title}
            budget={membersBudget(members)}
            members={members.length}
            date={date}
          />
          {!!description && <Description>{description}</Description>}
          {!!notes && <Description>{notes}</Description>}
          <Members />
        </Container>
      )}
    </Wrapper>
  );
}

export default Content;
