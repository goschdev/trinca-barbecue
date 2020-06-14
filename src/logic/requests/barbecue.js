import API from "logic/api";

export async function getBarbecues() {
  return await API().get('/barbecue', {
    params: {
      sortBy: 'date'
    }
  });
}

export async function getBarbecue(id) {
  return await API().get(`/barbecue/${id}`);
}
