import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {fonts} from '../assets/styleVariables';
import {Details} from '../screens/Details/Details';
import {Home} from '../screens/Home/Home';

const Stack = createStackNavigator();

export function HomeStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTitleStyle: {
          fontFamily: fonts.mainFont,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Product list',
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Details',
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}
