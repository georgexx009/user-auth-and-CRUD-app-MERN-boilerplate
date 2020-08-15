import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import JestTest, { Counter, dataReducer, fetchData } from './index';

const list = ['a', 'b', 'c'];

jest.mock('axios');
describe('Testing function that fetch data', () => {
  it('fetch a name', async () => {
    const data = {
      msg: 'hello',
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData()).resolves.toEqual(data);
  });
});

describe('JestTest component', () => {
  describe('Reducer', () => {
    it('should set a list', () => {
      const state = { list: [], error: null };
      const newState = dataReducer(state, {
        type: 'SET_LIST',
        list,
      });

      expect(newState).toEqual({ list, error: null });
    });

    it('should reset the error if list is set', () => {
      const state = { list: [], error: true };
      const newState = dataReducer(state, { type: 'SET_LIST', list });
      expect(newState).toEqual({ list, error: null });
    });

    it('should set the error', () => {
      const state = { list: [], error: null };
      const newState = dataReducer(state, {
        type: 'SET_ERROR',
      });
    });
  });
  test('snapshot render', () => {
    const component = renderer.create(<JestTest />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the inner Counter', () => {
    const wrapper = shallow(<JestTest />);
    expect(wrapper.find(Counter).length).toEqual(1);
  });
});

describe('Counter', () => {
  test('snapshot render', () => {
    const component = renderer.create(<Counter counter={1} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
