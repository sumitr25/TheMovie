import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import colors from '../res/colors';
import dimensions from '../res/dimensions';
import fonts from '../res/fonts';

const { width } = Dimensions.get('window');

const LoadMoreFooter = ({ isLoading }) =>
  isLoading ? <RenderFooterLoader /> : null;

const RenderFooterLoader = () => (
  <View style={styles.loadMoreView}>
    <ActivityIndicator animating size="large" color={colors.headerColor} />
  </View>
);

const styles = StyleSheet.create({
  loadMoreView: {
    height: fonts.xLarge,
    width,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: dimensions.smaller,
  },
  loadMoreText: {
    alignSelf: 'center',
    color: colors.headerColor,
    fontSize: dimensions.large,
  },
});

export default LoadMoreFooter;
