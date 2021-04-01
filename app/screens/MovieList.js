import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import strings from '../res/strings';

const MovieList = () => {
  return (
    <View style={styles.container}>
      <Text>{strings.movie.movieList.heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
});

export default MovieList;
