import React from 'react';
import {shallow} from 'enzyme';
import SearchBar from './SearchBar';
import MovieListRow from './MovieListRow';

describe('SearchBar', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<SearchBar onTextChange={() => {}} />)
            expect(component).toMatchSnapshot()
        });
    });
});

describe('MovieListRow', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<MovieListRow
                onRowPress={() => {}}
                item={{}}
                />)
            expect(component).toMatchSnapshot()
        });
    });
});
