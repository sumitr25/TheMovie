import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';

const MovieListRow = ({ item, onRowPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onRowPress(item);
      }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.description}>description</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: fonts.normal,
    paddingVertical: fonts.larger,
    borderBottomWidth: 0.2,
  },
  imageContainer: {
    backgroundColor: colors.white,
  },
  detailContainer: {
    backgroundColor: colors.white,
    paddingLeft: fonts.larger,
  },
  title: {
    color: colors.black,
    fontWeight: fonts.bold,
    fontSize: fonts.normal,
  },
  description: {
    color: colors.black,
  },
  logo: {
    width: 66,
    height: 66,
  },
});

export default MovieListRow;
