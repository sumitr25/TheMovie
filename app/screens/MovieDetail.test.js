import React from 'react';
import {shallow} from 'enzyme';
import MovieDetail from './MovieDetail';

describe('MovieDetail', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<MovieDetail />)
            expect(component).toMatchSnapshot()
        });
    });
});