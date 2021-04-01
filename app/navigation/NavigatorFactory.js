import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import colors from '../res/colors';
import MovieDetail from '../screens/MovieDetail';
import MovieList from '../screens/MovieList';
import { ScreenNames } from './ScreenNames';

const Stack = createStackNavigator();

const headerOption = {
  headerStyle: {
    backgroundColor: colors.headerColor,
  },
  headerTitleStyle: {
    color: colors.white,
  },
  headerTintColor: colors.white,
};

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.MovieList}
        component={MovieList}
        options={headerOption}
      />
      <Stack.Screen
        name={ScreenNames.MovieDetail}
        component={MovieDetail}
        options={headerOption}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
