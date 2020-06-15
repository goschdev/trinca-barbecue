import API from "logic/api";

/**
 * Get All Barbecues
 */
export async function getBarbecues() {
  return await API().get('/barbecue', {
    params: {
      sortBy: 'date'
    }
  });
}

/**
 * Get Barbecue Details
 *
 * @param {string} id Barbecue identify
 */
export async function getBarbecue(id) {
  return await API().get(`/barbecue/${id}`);
}

/**
 * Get Members of a Barbecue
 *
 * @param {string} id 
 */
export async function getBarbecueMembers(id) {
  return await API().get(`/barbecue/${id}/member`);
}

/**
 * Create a Barbecue
 *
 * @param {limit, offset} data
 */
export async function createBarbecue({title, date, suggestedBudget, description, notes}) {
  return await API().post('/barbecue', {
    title, date, suggestedBudget: +suggestedBudget, description, notes
  });
}

/**
 * Create a Member to a Barbecue
 *
 * @param {barbecue, name, budget, needDrink} data 
 */
export async function createMember({barbecue, name, budget, needDrink}) {
  return await API().post(`/barbecue/${barbecue}/member`, {
    name, budget: +budget, needDrink
  });
}

/**
 * Update a Member of a Barbecue
 *
 * @param {id, barbecue, name, budget, needDrink} data 
 */
export async function updateMember({id, barbecue, name, budget, needDrink}) {
  return await API().put(`/barbecue/${barbecue}/member/${id}`, {
    name, budget: +budget, needDrink
  });
}

/**
 * Delete a Member of a Barbecue
 *
 * @param {id, barbecue} data 
 */
export async function deleteMember({id, barbecue}) {
  return await API().delete(`/barbecue/${barbecue}/member/${id}`);
}

/**
 * Update a member like Paid
 *
 * @param {barbecue, member, paid} data 
 */
export async function setMemberPaid({barbecue, member, paid}) {
  return await API().put(`/barbecue/${barbecue}/member/${member}`, {
    paid: !!paid,
  });
}
