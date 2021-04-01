import { shallow } from 'enzyme';
import React from 'react';
import MovieListRow from '../screens/movie-list/MovieListRow';
import EmptyListComponent from './EmptyListComponent';
import LoadMoreFooter from './LoadMoreFooter';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<SearchBar onTextChange={() => {}} />);
      expect(component).toMatchSnapshot();
    });
  });
});

const item = {
  adult: false,
  backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
  genre_ids: [12, 878, 28],
  id: 299534,
  original_language: 'en',
  original_title: 'Avengers: Endgame',
  overview:
    "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
  popularity: 308.807,
  poster_path: '/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
  release_date: '2019-04-24',
  title: 'Avengers: Endgame',
  video: false,
  vote_average: 8.3,
  vote_count: 17671,
};

describe('MovieListRow', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <MovieListRow onRowPress={() => {}} item={{ item }} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});

describe('LoadMoreFooter', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<LoadMoreFooter isLoading={true} />);
      expect(component).toMatchSnapshot();
    });
  });
});

describe('EmptyListComponent', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<EmptyListComponent />);
      expect(component).toMatchSnapshot();
    });
  });
});
