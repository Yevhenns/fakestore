import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Details} from '../screens/Details';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {AddItem} from '../screens/AddItem';

const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  AddItem: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type AddItemScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddItem'
>;

export function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
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
        }}
      />
      <Stack.Screen
        name="AddItem"
        component={AddItem}
        options={{
          title: 'AddItem',
        }}
      />
    </Stack.Navigator>
  );
}
