import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import MovieListRow from '../components/MovieListRow';
import SearchBar from '../components/SearchBar';
import { ScreenNames } from '../navigation/ScreenNames';
import colors from '../res/colors';
import fonts from '../res/fonts';
import strings from '../res/strings';
import { getMovieSuggestion } from '../services';

const MovieList = () => {
  const { navigate } = useNavigation();
  const [movieList, setMovieList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    fetchMovieList(strings.movie.movieList.loadingKeyword);
  }, []);

  const fetchMovieList = query => {
    getMovieSuggestion(query)
      .then(response => {
        setIsLoaded(false);
        setMovieList(response.data.results);
      })
      .catch(() => {
        setIsLoaded(false);
      });
  };

  const startNavigation = itemId => {
    navigate(ScreenNames.MovieDetail, { itemId: itemId });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        onTextChange={searchText => {
          fetchMovieList(searchText);
        }}
      />

      {!isLoaded ? (
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
      ) : (
        <ActivityIndicator
          size={'large'}
          color={colors.headerColor}
          style={styles.activityIndicator}
        />
      )}
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
  activityIndicator: { flex: 1 },
});

export default MovieList;
