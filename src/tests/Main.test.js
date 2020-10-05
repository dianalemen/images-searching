import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';
import Main from '../components/Main.js';
import mockedImages from './Api.test';
import getImages from '../api/Images';

enzyme.configure({ adapter: new Adapter() });

let main;
jest.mock('getImages').mockReturnValue(Promise.resolve(mockedImages));

beforeEach(() => {
  main = enzyme.mount(<Main />);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<Main />', () => {
  it("should fetch images", async () => {
    main.handleClick();
    expect(getImages).toHaveBeenCalled();
  });
});
