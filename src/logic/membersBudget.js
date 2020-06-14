export function membersBudget(members) {
  const values = members.map(item => item.budget);

  const reduce = (accumulator, value) => accumulator + value;
  const total = values.length ? values.reduce(reduce) : 0;
  
  return total;
}
