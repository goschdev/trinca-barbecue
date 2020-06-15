import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { getBarbecue } from 'logic/requests/barbecue';

export const BarbecueContext = createContext({});

const initialState = {
  members: [],
  date: '',
  title: '',
  description: '',
  notes: '',
};

export function BarbecueProvider({ children }) {
  const [barbecue, setBarbecue] = useState(initialState);
  const [loaded, setLoaded] = useState(false);

  async function fetch(id) {
    setLoaded(false);
    const { data } = await getBarbecue(id);
    setBarbecue(data);
    setLoaded(true);
  }

  return (
    <BarbecueContext.Provider value={{ barbecue, loaded, fetch }}>
      {children}
    </BarbecueContext.Provider>
  );
}

BarbecueProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BarbecueProvider;
