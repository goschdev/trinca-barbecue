import React, { useEffect, useState } from 'react';

import { Wrapper } from 'visual/styles/Wrapper';
import { TEXTS } from 'logic/texts';
import { getBarbecues } from 'logic/requests/barbecue';
import { membersBudget } from 'logic/membersBudget';

import { Barbecue } from './Barbecue';
import { CreateBarbecue } from './CreateBarbecue';
import { Container, HiddenTitle, List } from './styles';

export function BarbecuesList() {
  const [barbecues, setBarbecues] = useState([]);

  async function fetch() {
    const { data } = await getBarbecues();
    setBarbecues(data);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Container>
      <HiddenTitle>{TEXTS.barbecuesList.title}</HiddenTitle>
      <Wrapper>
        <List>
          {barbecues.map(({ title, date, members, id }) => (
            <Barbecue
              key={id}
              id={id}
              title={title}
              members={members.length}
              budget={membersBudget(members)}
              date={date}
            />
          ))}
          <CreateBarbecue />
        </List>
      </Wrapper>
    </Container>
  );
}

export default BarbecuesList;
