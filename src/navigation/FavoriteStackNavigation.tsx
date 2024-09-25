import React from 'react';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

import {createStackNavigator} from '@react-navigation/stack';

import {fonts} from '../assets/styleVariables';
import {Details} from '../screens/Details';
import {Favorites} from '../screens/Favorites';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Favorites: undefined;
  Details: {productId: number | string};
};

export type FavoriteScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Favorites'
>;

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

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
        name="FavoriteList"
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
