import API from "logic/api";

export async function getBarbecues() {
  return await API().get('/barbecue', {
    params: {
      sortBy: 'date'
    }
  });
}
