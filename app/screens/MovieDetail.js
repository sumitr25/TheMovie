import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import colors from '../res/colors';
import dimensions from '../res/dimensions';
import fonts from '../res/fonts';
import strings from '../res/strings';
import { getMovieDetail } from '../services';
import NetworkUtils from '../services/NetworkUtils';
import { getImageUri } from '../services/utils';

const MovieDetail = ({ route }) => {
  const { id } = route.params;
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    NetworkUtils.isNetworkAvailable().then(connected => {
      if (connected) {
        getMovieDetail(id)
          .then(response => {
            setIsLoaded(false);
            setMovieDetail(response.data);
          })
          .catch(() => {
            Toast.show({
              text1: strings.movie.network.serverError,
              position: 'bottom',
              type: 'error',
            });
            setIsLoaded(false);
          });
      } else {
        Toast.show({
          text1: strings.movie.network.connection,
          position: 'bottom',
          type: 'error',
        });
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {!isLoaded ? (
        <View>
          <Image
            style={styles.banner}
            source={{
              uri: getImageUri(movieDetail.poster_path),
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
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: dimensions.large,
    paddingVertical: dimensions.small,
    flex: 1,
  },
  banner: {
    height: dimensions.bannerHeight,
  },
  title: {
    color: colors.black,
    fontWeight: fonts.bold,
    fontSize: dimensions.large,
    paddingVertical: dimensions.small,
  },
  description: {
    color: colors.black,
  },
  activityIndicator: {
    flex: 1,
  },
});

export default MovieDetail;
