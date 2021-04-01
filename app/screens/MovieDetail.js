import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { colors } from '../res/colors';
import { dimensions } from '../res/dimensions';
import { fontWeight } from '../res/fontWeight';
import { images } from '../res/images';
import { strings } from '../res/strings';
import { getMovieDetail } from '../services/network/Helper';
import { getImageUri } from '../services/network/Manager';
import NetworkUtils from '../services/network/Utils';

const MovieDetail = ({ route }) => {
  const { id } = route.params;
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoaded, setIsLoaded] = useState(true);
  const [isImageLoading, setIsImageLoading] = useState(false);

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
            source={
              isImageLoading
                ? { uri: getImageUri(movieDetail.poster_path) }
                : images.defaultImage
            }
            onLoad={() => setIsImageLoading(true)}
            defaultSource={images.defaultImage}
            resizeMode={'cover'}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{movieDetail.title}</Text>
            <Text style={styles.description}>{movieDetail.overview}</Text>
          </View>
        </View>
      ) : (
        <ActivityIndicator
          size={'large'}
          color={colors.darkGreen}
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
    flex: 1,
  },
  banner: {
    height: dimensions.bannerHeight,
  },
  contentContainer: {
    paddingHorizontal: dimensions.large,
    paddingVertical: dimensions.small,
  },
  title: {
    color: colors.black,
    fontWeight: fontWeight.bold,
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
