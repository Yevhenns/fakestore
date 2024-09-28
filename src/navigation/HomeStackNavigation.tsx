import React from 'react';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

import {createStackNavigator} from '@react-navigation/stack';

import {fonts} from '../assets/styleVariables';
import {Details} from '../screens/Details/Details';
import {Home} from '../screens/Home/Home';

const Stack = createStackNavigator();

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

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
