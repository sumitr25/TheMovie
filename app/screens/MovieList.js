import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MovieListRow from '../components/MovieListRow';
import SearchBar from '../components/SearchBar';
import { MockDataList } from '../mock/ListMockData';
import colors from '../res/colors';

const MovieList = () => {
  return (
    <View style={styles.container}>
      <SearchBar
        onTextChange={searchText => {
          console.log('>>>' + searchText);
        }}
      />
      <FlatList
        data={MockDataList}
        style={styles.listContainer}
        keyExtractor={item => item.id}
        renderItem={item => (
          <MovieListRow
            item={item}
            onRowPress={selectedItem => {
              console.log(selectedItem.id);
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
  },
});

export default MovieList;
