import React from 'react';
import { shallow } from 'enzyme';
import { Title } from './Title';

describe('Title component', () => {
  it('renders', () => {
    const wrapper = shallow(<Title title="Test" />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should contain correct title', () => {
    const wrapper = shallow(<Title title="Test" />);

    const text = wrapper.find('a').text();
    expect(text).toEqual('Test');
  });
});
