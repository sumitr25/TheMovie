import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MovieDetail from '../screens/MovieDetail';
import MovieList from '../screens/MovieList';
import { ScreenNames } from './ScreenNames';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={ScreenNames.MovieList} component={MovieList} />
      <Stack.Screen name={ScreenNames.MovieDetail} component={MovieDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
