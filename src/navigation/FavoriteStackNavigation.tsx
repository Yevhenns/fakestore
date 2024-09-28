import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {fonts} from '../assets/styleVariables';
import {Details} from '../screens/Details/Details';
import {Favorites} from '../screens/Favorites/Favorites';

const Stack = createStackNavigator();

export function FavoriteStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerMode: 'screen',
        headerTitleStyle: {
          fontFamily: fonts.mainFont,
        },
      }}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favorite list',
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
