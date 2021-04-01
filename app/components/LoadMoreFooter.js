import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';

const { width } = Dimensions.get('window');

const LoadMoreFooter = ({ isLoading }) => (isLoading ? <RenderFooterLoader /> : null);

const RenderFooterLoader = () => (
  <View style={styles.loadMoreView}>
    <ActivityIndicator animating size="large" color={colors.headerColor} />
  </View>
);

LoadMoreFooter.defaultProps = {
  isLoading: false,
};

LoadMoreFooter.propTypes = {
  isLoading: PropTypes.bool,
};

const styles = StyleSheet.create({
  loadMoreView: {
    height: 40,
    width,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  loadMoreText: {
    alignSelf: 'center',
    color: colors.headerColor,
    fontSize: fonts.large,
  },
});

export default LoadMoreFooter;
