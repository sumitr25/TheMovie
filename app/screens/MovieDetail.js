import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';

const MovieDetail = ({ route }) => {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.banner}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      <Text style={styles.title}>Title</Text>
      <Text style={styles.description}>
        If you use react-navigation v5, you should import hooks from
        react-navigation v5 directly, and should not add this project.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: fonts.large,
    paddingVertical: fonts.small,
  },
  banner: {
    height: 200,
  },
  title: {
    color: colors.black,
    fontWeight: fonts.bold,
    fontSize: fonts.normal,
    paddingVertical: fonts.small,
  },
  description: {
    color: colors.black,
  },
});

export default MovieDetail;
