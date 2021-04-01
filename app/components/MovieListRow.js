import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../res/colors';
import dimensions from '../res/dimensions';
import fonts from '../res/fonts';
import { getImageUri } from '../services/utils';

const MovieListRow = ({ item, onRowPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onRowPress(item.item);
      }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.movieThumbnail}
            source={{
              uri: getImageUri(item.item.poster_path),
            }}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.item.title}
          </Text>
          <Text numberOfLines={3} style={styles.description}>
            {item.item.overview}
          </Text>
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
    paddingVertical: dimensions.larger,
    borderBottomWidth: dimensions.borderBottomWidth,
  },
  imageContainer: {
    backgroundColor: colors.white,
  },
  detailContainer: {
    backgroundColor: colors.white,
    paddingLeft: dimensions.larger,
    paddingRight: dimensions.xLarge,
  },
  title: {
    color: colors.black,
    fontWeight: fonts.bold,
    fontSize: dimensions.large,
  },
  description: {
    color: colors.black,
    paddingRight: dimensions.large,
  },
  movieThumbnail: {
    width: dimensions.movieThumbnail,
    height: dimensions.movieThumbnail,
    borderRadius: dimensions.mini,
  },
});

export default MovieListRow;
