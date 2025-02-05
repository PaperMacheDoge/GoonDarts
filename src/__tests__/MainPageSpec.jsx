import React from "react";
import MainPage from "../main/Components/general/MainPage";
import {configure, shallow} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Title from "../main/Components/general/Title";
import ScoringSection from "../main/Components/301/ScoringSection";

configure({adapter: new Adapter()});

describe('MainPage', () => {
    it('renders the title', () => {
        const wrapper = shallow(<MainPage/>);

        expect(wrapper.exists(Title)).toBe(true);
        expect(wrapper.exists(ScoringSection)).toBe(true);
        //test for 2 different ScoringSections
        expect(wrapper.find(ScoringSection)).toHaveLength(2);
    });
});