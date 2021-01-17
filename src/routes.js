import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './Main';
import Login from './Login';
import Restaurant from './Restaurant';
import RestaurantList from './RestaurantList';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RestaurantList"
        component={RestaurantList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
