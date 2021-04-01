import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import { fullUrl } from '../services/utils';

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
              uri: fullUrl(item.item.poster_path),
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
    paddingVertical: fonts.larger,
    borderBottomWidth: fonts.borderBottomWidth,
  },
  imageContainer: {
    backgroundColor: colors.white,
  },
  detailContainer: {
    backgroundColor: colors.white,
    paddingLeft: fonts.larger,
    paddingRight: fonts.xLarge,
  },
  title: {
    color: colors.black,
    fontWeight: fonts.bold,
    fontSize: fonts.large,
  },
  description: {
    color: colors.black,
    paddingRight: fonts.large,
  },
  movieThumbnail: {
    width: fonts.movieThumbnail,
    height: fonts.movieThumbnail,
  },
});

export default MovieListRow;
