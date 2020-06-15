import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  getBarbecue,
  createMember,
  setMemberPaid,
  getBarbecueMembers,
  updateMember,
  deleteMember,
} from 'logic/requests/barbecue';

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
  const [membersLoading, setMembersLoading] = useState(false);

  const fetch = useCallback(async () => {
    setLoaded(false);
    const { data } = await getBarbecue(id);
    setBarbecue(data);
    setLoaded(true);
  }, [id]);

  async function fetchMembers() {
    const { data } = await getBarbecueMembers(id);
    setBarbecue({ ...barbecue, members: data });
  }

  async function submitCreateMember(data) {
    setMembersLoading(true);
    await createMember({ barbecue: id, ...data });
    await fetchMembers();
    setMembersLoading(false);
  }

  async function submitUpdateMember(data) {
    setMembersLoading(true);
    await updateMember({ barbecue: id, ...data });
    await fetchMembers();
    setMembersLoading(false);
  }

  async function submitDeleteMember(memberId) {
    setMembersLoading(true);
    await deleteMember({ barbecue: id, id: memberId });
    await fetchMembers();
    setMembersLoading(false);
  }

  async function toggleMemberPaid(member, paid) {
    setMembersLoading(true);
    await setMemberPaid({ barbecue: id, member, paid });
    await fetchMembers();
    setMembersLoading(false);
  }

  useEffect(() => {
    fetch();
  }, [fetch]);

  const publicValue = {
    barbecue,
    loaded,
    membersLoading,
    fetch,
    submitCreateMember,
    toggleMemberPaid,
    submitUpdateMember,
    submitDeleteMember,
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
