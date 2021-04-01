import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { colors } from '../res/colors';
import { DEFAULT_MOVIE_SEARCH } from '../res/constants';
import { dimensions } from '../res/dimensions';
import { images } from '../res/images';
import { strings } from '../res/strings';

const SearchBar = ({ onTextChange }) => {
  const [searchString, setSearchString] = useState('');

  const request = debounce(searchText => {
    onTextChange(searchText);
  }, 300);

  const debounceRequest = useCallback(searchText => request(searchText), []);

  const onSearchTextChange = searchText => {
    setSearchString(searchText);
    debounceRequest(searchText);
  };

  const onCrossButtonPressed = () => {
    setSearchString('');
    onTextChange(DEFAULT_MOVIE_SEARCH);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSearchBox}>
        <Image style={styles.searchIcon} source={images.searchIcon} />
        <TextInput
          style={styles.searchBox}
          placeholder={strings.movie.movieList.search}
          placeholderTextColor={colors.black}
          value={searchString}
          onChangeText={query => onSearchTextChange(query)}
        />
        {searchString.length > 0 ? (
          <TouchableOpacity onPress={() => onCrossButtonPressed()}>
            <Image style={styles.crossIcon} source={images.crossIcon} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: dimensions.small,
    paddingHorizontal: dimensions.small,
    fontSize: dimensions.large,
    backgroundColor: colors.silver,
  },
  containerSearchBox: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: dimensions.small,
    borderRadius: 999,
  },
  searchIcon: {
    width: dimensions.largest,
    height: dimensions.largest,
  },
  crossIcon: {
    width: dimensions.larger,
    height: dimensions.larger,
  },
  searchBox: {
    color: colors.black,
    paddingLeft: dimensions.mini,
    fontSize: dimensions.large,
    flex: 1,
  },
});

export default SearchBar;
