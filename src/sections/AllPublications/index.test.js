import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import AllPublications from './index';
import PostInterface from '../../componentsV2/containers/postInterface';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
import { initialState } from '../../store/initialState';

describe('SECTION: AllPublications', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ ...initialState });
  });

  it('it renders the PostInterface component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <AllPublications />
      </Provider>
    );
    expect(wrapper.find(PostInterface).length).toEqual(1);
  });
});
