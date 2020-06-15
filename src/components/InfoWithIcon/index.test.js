import React from 'react';
import { shallow } from 'enzyme';

import { InfoWithIcon } from '.';

describe('[Component] InfoWithIcon', () => {
  let wrapper;

  it('Should renders without crashing', () => {
    wrapper = shallow(<InfoWithIcon />);
  });
});
