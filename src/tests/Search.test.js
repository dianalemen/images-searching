import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';
import Search from '../components/Search.js';

enzyme.configure({ adapter: new Adapter() });

const setImagesMock = jest.fn();
const onClickMock = jest.fn();
let search;

beforeEach(() => {
  search = enzyme.mount(<Search onClick= { onClickMock } setImages={ setImagesMock } />);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<Search /> button', () => {
  it('should enabled after text is typed', () => {
    search.find('input').simulate('change', { target: { value: 'abcdefghijk' } });
  
    expect(search.find('button').prop('disabled')).toBe(false);
  });
  
  it('should be disabled if there is no text typed', () => {
    search.find('input').simulate('change', { target: { value: '' } });
  
    expect(search.find('button').prop('disabled')).toBe(true);
  });
});
