import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MovieList = () => {
  return (
    <View style={styles.container}>
      <Text>Movie List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
});

export default MovieList;
