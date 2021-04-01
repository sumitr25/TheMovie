import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import colors from '../res/colors';
import fonts from '../res/fonts';
import images from '../res/images';

const SearchBar = ({ onTextChange }) => {
  const [searchString, setSearchString] = useState('');

  const request = debounce(searchText => {
    onTextChange(searchText);
  }, 1000);

  const debounceRequest = useCallback(searchText => request(searchText), []);

  const onSearchTextChange = searchText => {
    setSearchString(searchText);
    debounceRequest(searchText);
  };

  const onCrossButtonPressed = () => {
    setSearchString('');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.searchIcon} source={images.searchIcon} />
      <TextInput
        style={styles.searchBox}
        placeholder={'Search...'}
        placeholderTextColor={colors.black}
        value={searchString}
        onChangeText={text => {
          onSearchTextChange(text);
        }}
      />
      {searchString.length > 0 ? (
        <TouchableOpacity
          onPress={() => {
            onCrossButtonPressed();
          }}>
          <Image style={styles.crossIcon} source={images.crossIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: fonts.mini,
    paddingHorizontal: fonts.small,
    fontSize: fonts.large,
    backgroundColor: colors.silver,
    alignItems: 'center',
  },
  searchIcon: {
    width: fonts.largest,
    height: fonts.largest,
  },
  crossIcon: {
    width: fonts.larger,
    height: fonts.larger,
  },
  searchBox: {
    color: colors.black,
    paddingLeft: fonts.mini,
    fontSize: fonts.large,
    flex: 1,
  },
});

export default SearchBar;
