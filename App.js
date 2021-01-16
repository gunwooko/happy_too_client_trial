/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/Main';
import Login from './src/Login';

const App = () => {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
};

export default App;
