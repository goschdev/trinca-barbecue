import React from 'react';

import { Wrapper } from 'visual/styles/Wrapper';
import { Container, Content } from './styles';
import { Header } from './Header';

export function BarbecueDetail() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Header
            title="Níver do Gui"
            budget={280}
            members={15}
            date="2020-07-25T10:26:23.474Z"
          />
        </Content>
      </Wrapper>
    </Container>
  );
}

export default BarbecueDetail;
