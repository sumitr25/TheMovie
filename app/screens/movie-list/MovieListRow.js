import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../res/colors';
import { dimensions } from '../../res/dimensions';
import { fontWeight } from '../../res/fontWeight';
import { images } from '../../res/images';
import { strings } from '../../res/strings';
import { getImageUri } from '../../services/network/Manager';

const MovieListRow = ({ item, onRowPress }) => {
  const [isImageLoading, setIsImageLoading] = useState(false);

  return (
    <TouchableOpacity onPress={() => onRowPress(item)}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.movieThumbnail}
            source={
              isImageLoading
                ? { uri: getImageUri(item.poster_path) }
                : images.defaultImage
            }
            onLoad={() => setIsImageLoading(true)}
            defaultSource={images.defaultImage}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <KeyInfo
            keyValue={strings.movie.movieList.releaseDate}
            value={item.release_date}
          />
          <KeyInfo
            keyValue={strings.movie.movieList.ratings}
            value={item.vote_average}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const KeyInfo = ({ keyValue, value }) => {
  return (
    <View style={styles.keyInfo}>
      <Text style={styles.keyLabel}>{keyValue}:</Text>
      <Text style={styles.valueLabel}>{value}</Text>
    </View>
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
    fontWeight: fontWeight.bold,
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
  keyInfo: {
    flexDirection: 'row',
    marginBottom: dimensions.mini,
  },
  keyLabel: {
    color: colors.darkGray,
  },
  valueLabel: {
    color: colors.black,
    marginLeft: dimensions.mini,
  },
});

export default MovieListRow;
