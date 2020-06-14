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

export async function createBarbecue({title, date, suggestedBudget, description, notes}) {
  return await API().post('/barbecue', {
    title, date, suggestedBudget: +suggestedBudget, description, notes
  });
}