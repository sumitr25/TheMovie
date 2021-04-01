import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './app/navigation/NavigatorFactory';

const App = () => (
  <>
    <StatusBar barStyle={'light-content'} />
    <Navigation />
  </>
);

export default App;
