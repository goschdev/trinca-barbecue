import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Link } from 'react-router-dom';

import { ROUTES } from 'logic/constants';
import { Header } from '.';
import { Logo } from './styles';

describe('[Component] Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={[ROUTES.MAIN]}>
        <Route path={ROUTES.MAIN}>
          <Header />
        </Route>
      </MemoryRouter>
    );
  });

  it('Should have a H1 element', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('Should have a link', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
