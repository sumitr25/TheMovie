import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import { getMovieDetail } from '../services';
import { fullUrl } from '../services/utils';

const MovieDetail = ({ route }) => {
  const id = route.params;
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getMovieDetail(id.itemId)
      .then(response => {
        setIsLoaded(false);
        setMovieDetail(response.data);
      })
      .catch(error => {
        setIsLoaded(false);
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {!isLoaded ? (
        <View>
          <Image
            style={styles.banner}
            source={{
              uri: fullUrl(movieDetail.poster_path),
            }}
          />
          <Text style={styles.title}>{movieDetail.title}</Text>
          <Text style={styles.description}>{movieDetail.overview}</Text>
        </View>
      ) : (
        <ActivityIndicator
          size={'large'}
          color={colors.headerColor}
          style={styles.activityIndicator}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: fonts.large,
    paddingVertical: fonts.small,
    flex: 1,
  },
  banner: {
    height: fonts.bannerHeight,
  },
  title: {
    color: colors.black,
    fontWeight: fonts.bold,
    fontSize: fonts.large,
    paddingVertical: fonts.small,
  },
  description: {
    color: colors.black,
  },
  activityIndicator: {
    flex: 1,
  },
});

export default MovieDetail;
