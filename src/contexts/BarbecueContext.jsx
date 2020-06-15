import React, { createContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  getBarbecue,
  createMember,
  setMemberPaid,
} from 'logic/requests/barbecue';
import { useParams } from 'react-router-dom';

export const BarbecueContext = createContext({});

const initialState = {
  members: [],
  date: '',
  title: '',
  description: '',
  notes: '',
};

export function BarbecueProvider({ children }) {
  const { id } = useParams();
  const [barbecue, setBarbecue] = useState(initialState);
  const [loaded, setLoaded] = useState(false);

  const fetch = useCallback(async () => {
    setLoaded(false);
    const { data } = await getBarbecue(id);
    setBarbecue(data);
    setLoaded(true);
  }, [id]);

  async function submitCreateMember(data) {
    setLoaded(false);
    await createMember({ barbecue: id, ...data });
    fetch();
  }

  async function toggleMemberPaid(member, paid) {
    setLoaded(false);
    await setMemberPaid({ barbecue: id, member, paid });
    fetch();
  }

  useEffect(() => {
    fetch();
  }, [fetch]);

  const publicValue = {
    barbecue,
    loaded,
    fetch,
    submitCreateMember,
    toggleMemberPaid,
  };

  return (
    <BarbecueContext.Provider value={publicValue}>
      {children}
    </BarbecueContext.Provider>
  );
}

BarbecueProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BarbecueProvider;
