import React, { useEffect, useState, useCallback } from 'react';

import { Wrapper } from 'visual/styles/Wrapper';

import { useParams } from 'react-router-dom';
import { getBarbecue } from 'logic/requests/barbecue';
import { Container } from './styles';
import { Content } from './Content';

export function BarbecueDetail() {
  const { id } = useParams();
  const [barbecue, setBarbecue] = useState({});
  const [loaded, setLoaded] = useState(false);

  const fetch = useCallback(async () => {
    const { data } = await getBarbecue(id);
    setBarbecue(data);
    setLoaded(true);
  }, [id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Container>
      <Wrapper>{loaded && <Content data={barbecue} />}</Wrapper>
    </Container>
  );
}

export default BarbecueDetail;
