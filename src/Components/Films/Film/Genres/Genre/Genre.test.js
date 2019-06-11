import React from 'react';
import { shallow } from 'enzyme';
import Genre from './Genre';

describe('Genre component', () => {
  it('renders', () => {
    const wrapper = shallow(<Genre genre="test genre" />);

    expect(wrapper.exists()).toBe(true);
  });
});
