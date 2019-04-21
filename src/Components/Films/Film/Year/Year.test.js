import React from "react";
import { shallow } from "enzyme";
import { Year } from "./Year";

describe("Year component", () => {
  it("renders", () => {
    const wrapper = shallow(<Year date="2018-03-30" />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should contain correct year', () => {
    const wrapper = shallow(<Year date="2018-03-30" />);

    const text = wrapper.find('p').text();
    expect(text).toEqual('2018');
  });
});