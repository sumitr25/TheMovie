import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../res/colors';
import dimensions from '../res/dimensions';
import strings from '../res/strings';

const EmptyListComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>{strings.movie.movieList.noData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: colors.black,
    fontSize: dimensions.larger,
  },
});

export default EmptyListComponent;
