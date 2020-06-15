import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '.';

describe('[Component] Footer', () => {
  let wrapper;

  it('Should renders without crashing', () => {
    wrapper = shallow(<Footer />);
  });
});
