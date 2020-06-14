import React from 'react';

import { Wrapper } from 'visual/styles/Wrapper';
import { TEXTS } from 'logic/texts';

import { Barbercue } from './Barbercue';
import { Container, HiddenTitle, List } from './styles';

export function BarbercuesList() {
  return (
    <Container>
      <HiddenTitle>{TEXTS.barbercuesList.title}</HiddenTitle>
      <Wrapper>
        <List>
          <Barbercue
            title="Níver do Gui"
            members={15}
            budget={280}
            date="2020-07-25T10:26:23.474Z"
          />
          <Barbercue
            title="Níver do Gui"
            members={15}
            budget={280}
            date="2020-07-25T10:26:23.474Z"
          />
          <Barbercue
            title="Níver do Gui"
            members={15}
            budget={280}
            date="2020-07-25T10:26:23.474Z"
          />
        </List>
      </Wrapper>
    </Container>
  );
}

export default BarbercuesList;
