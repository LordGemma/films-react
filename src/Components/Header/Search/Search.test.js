import React from "react";
import { shallow } from "enzyme";
import { Search } from "./Search";

describe("Search component", () => {
  it("should render", () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should contain hello in search input", () => {
    const wrapper = shallow(<Search />);

    wrapper.find("input").simulate("change", {
      target: { value: "hello" }
    });

    expect(wrapper.find("input").props().value).toEqual("hello");
  });

  it("should contain empty string in search input", () => {
    const wrapper = shallow(<Search />);

    wrapper.find("input").simulate("change", {
      target: { value: "" }
    });

    expect(wrapper.find("input").props().value).toBeFalsy();
  });
});
