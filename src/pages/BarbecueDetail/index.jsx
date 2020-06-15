import React from 'react';

import { BarbecueProvider } from 'contexts/BarbecueContext';
import { Container } from './styles';
import { Content } from './Content';

export function BarbecueDetail() {
  return (
    <Container>
      <BarbecueProvider>
        <Content />
      </BarbecueProvider>
    </Container>
  );
}

export default BarbecueDetail;
