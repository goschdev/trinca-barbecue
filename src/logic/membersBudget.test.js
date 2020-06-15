import { membersBudget } from './membersBudget';

describe('[Logic] membersBudget', () => {
  it('Should returns 260', () => {
    const members = [{"budget":20},{"budget":20},{"budget":10},{"budget":20},{"budget":20},{"budget":20},{"budget":10},{"budget":20},{"budget":20},{"budget":20},{"budget":20},{"budget":20},{"budget":20},{"budget":20}];

    expect(membersBudget(members)).toEqual(260);
  });

  it('Should returns 0', () => {
    const members = [];

    expect(membersBudget(members)).toEqual(0);
  });
});
