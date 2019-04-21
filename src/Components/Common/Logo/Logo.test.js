import React from "react";
import { shallow } from "enzyme";
import { Logo } from './Logo';

describe('Logo component', () => {
    it('should render', () => {
        const wrapper = shallow(<Logo />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should contain default text', () => {
        const wrapper = shallow(<Logo />);

        expect(wrapper.find("p").text()).toEqual("netflixroulette");
    })

    it('should contain passed text', () => {
        const wrapper = shallow(<Logo title='test logo' />);

        expect(wrapper.find("p").text()).toEqual("test logo");
    })
})