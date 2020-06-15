import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from '.';

describe('[Component] Modal', () => {
  let wrapper;

  it('Should renders without crashing', () => {
    wrapper = shallow(<Modal />);
  });
});
