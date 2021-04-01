import { shallow } from 'enzyme';
import React from 'react';
import MovieDetail from './MovieDetail';

describe('MovieDetail', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <MovieDetail route={{ params: { itemId: 299534 } }} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
