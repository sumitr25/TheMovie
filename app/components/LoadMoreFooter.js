import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { colors } from '../res/colors';
import { dimensions } from '../res/dimensions';
import { fontWeight } from '../res/fontWeight';

const { width } = Dimensions.get('window');

const LoadMoreFooter = ({ isLoading }) =>
  isLoading ? <RenderFooterLoader /> : null;

const RenderFooterLoader = () => (
  <View style={styles.loadMoreView}>
    <ActivityIndicator animating size="large" color={colors.darkGreen} />
  </View>
);

const styles = StyleSheet.create({
  loadMoreView: {
    height: fontWeight.xLarge,
    width,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: dimensions.smaller,
  },
  loadMoreText: {
    alignSelf: 'center',
    color: colors.darkGreen,
    fontSize: dimensions.large,
  },
});

export default LoadMoreFooter;
