import React from "react";
import { shallow } from "enzyme";
import { Poster } from "./Poster";

describe("Poster component", () => {
    const image = {
        "title":"Gemini",
        "poster_path":"test-url"
    };

  it("renders", () => {
    const wrapper = shallow(<Poster date="2018-03-30" />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should contain correct image url', () => {
    const wrapper = shallow(<Poster url={image.poster_path} filmTitle={image.title} />);

    const url = wrapper.find('img').prop('src');
    expect(url).toEqual("test-url");
  });
});