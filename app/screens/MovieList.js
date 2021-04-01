import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import EmptyListComponent from '../components/EmptyListComponent';
import LoadMore from '../components/LoadMoreFooter';
import MovieListRow from '../components/MovieListRow';
import SearchBar from '../components/SearchBar';
import { ScreenNames } from '../navigation/ScreenNames';
import colors from '../res/colors';
import fonts from '../res/fonts';
import strings from '../res/strings';
import { getMovieSuggestion } from '../services';

const MovieList = () => {
  const initialPage = 1;
  const { navigate } = useNavigation();
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);

  useEffect(() => {
    fetchMovieList(strings.movie.movieList.loadingKeyword, initialPage);
  }, []);

  const fetchMovieList = (query, page) => {
    setIsLoading(true);
    getMovieSuggestion(query, page)
      .then(response => {
        setIsLoading(false);
        setTotalPageCount(response.data.total_pages);
        if (page > initialPage) {
          setMovieList(prev => [...prev, ...response.data.results]);
        } else {
          setMovieList(response.data.results);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleEvent = page => {
    fetchMovieList(strings.movie.movieList.loadingKeyword, page);
    setPageNo(page);
  };

  const startNavigation = itemId => {
    navigate(ScreenNames.MovieDetail, { itemId: itemId });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        onTextChange={searchText => {
          fetchMovieList(searchText, initialPage);
          setPageNo(initialPage);
        }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={movieList}
        style={styles.listContainer}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={() => <LoadMore isLoading={isLoading} />}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          if (pageNo < totalPageCount) {
            handleEvent(pageNo + 1);
          }
        }}
        renderItem={item => (
          <MovieListRow
            item={item}
            onRowPress={selectedItem => {
              startNavigation(selectedItem.id);
            }}
          />
        )}
        ListEmptyComponent={() => <EmptyListComponent />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: fonts.large,
  },
  activityIndicator: { flex: 1 },
  contentContainerStyle: { flexGrow: 1 },
});

export default MovieList;
