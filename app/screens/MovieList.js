import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MovieListRow from '../components/MovieListRow';
import { MockDataList } from '../mock/ListMockData';
import colors from '../res/colors';
import fonts from '../res/fonts';

const MovieList = () => {
  return (
    <View>
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
  listContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    position: 'absolute',
    top: fonts.large,
  },
});

export default MovieList;
