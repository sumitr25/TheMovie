import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import { fullUrl } from '../services/utils';

const MovieDetail = ({ route }) => {
  const { item } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.banner}
          source={{
            uri: fullUrl(item.backdrop_path),
          }}
        />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.overview}</Text>
      </View>
    </ScrollView>
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
    fontSize: fonts.large,
    paddingVertical: fonts.small,
  },
  description: {
    color: colors.black,
  },
});

export default MovieDetail;
