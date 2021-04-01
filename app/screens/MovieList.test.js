import { shallow } from 'enzyme';
import React from 'react';
import MovieList from './MovieList';

describe('MovieList', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<MovieList />);
      expect(component).toMatchSnapshot();
    });
  });
});
