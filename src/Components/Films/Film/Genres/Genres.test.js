import React from "react";
import { shallow } from "enzyme";
import { Genres } from "./Genres";

describe("Genres component", () => {
  it("renders", () => {
    const wrapper = shallow(<Genres filmId="123" genres={['test1', 'test2']} />);

    expect(wrapper.exists()).toBe(true);
  });
});