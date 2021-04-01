import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MovieListRow from '../components/MovieListRow';
import SearchBar from '../components/SearchBar';
import { ScreenNames } from '../navigation/ScreenNames';
import colors from '../res/colors';
import fonts from '../res/fonts';
import strings from '../res/strings';
import { getMovieDetail, getMovieSuggestion } from '../services';

const MovieList = () => {
  const { navigate } = useNavigation();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovieList(strings.movie.movieList.loadingKeyword);
  }, []);

  const fetchMovieList = query => {
    getMovieSuggestion(query)
      .then(response => {
        setMovieList(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const startNavigation = itemId => {
    getMovieDetail(itemId)
      .then(response => {
        navigate(ScreenNames.MovieDetail, { item: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        onTextChange={searchText => {
          fetchMovieList(searchText);
          console.log('>>>onTextChange' + searchText);
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={movieList}
        style={styles.listContainer}
        keyExtractor={item => item.id.toString()}
        renderItem={item => (
          <MovieListRow
            item={item}
            onRowPress={selectedItem => {
              startNavigation(selectedItem.id);
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: fonts.large,
  },
});

export default MovieList;
