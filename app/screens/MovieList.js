import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MovieListRow from '../components/MovieListRow';
import SearchBar from '../components/SearchBar';
import { MockDataList } from '../mock/ListMockData';
import { ScreenNames } from '../navigation/ScreenNames';
import colors from '../res/colors';
import fonts from '../res/fonts';
import { getMovieDetail, getMovieSuggestion } from '../services';

const MovieList = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = () => {
    getMovieSuggestion('Avenger')
      .then(response => {
        console.log('>>>', response);
      })
      .catch(error => {
        console.log('>>>', error);
      });
  };

  const startNavigation = listItem => {
    getMovieDetail('1771')
      .then(response => {
        console.log('>>>', response);
        navigate(ScreenNames.MovieDetail, { item: listItem });
      })
      .catch(error => {
        console.log('>>>', error);
      });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        onTextChange={searchText => {
          console.log('>>>' + searchText);
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={MockDataList}
        style={styles.listContainer}
        keyExtractor={item => item.id}
        renderItem={item => (
          <MovieListRow
            item={item}
            onRowPress={selectedItem => {
              startNavigation(selectedItem);
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
