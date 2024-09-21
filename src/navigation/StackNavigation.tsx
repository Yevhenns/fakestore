import React from 'react';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

import {createStackNavigator} from '@react-navigation/stack';

import {AddProduct} from '../screens/AddProduct';
import {Details} from '../screens/Details';
import {Home} from '../screens/Home';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: number};
  AddProduct: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type AddProductScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddProduct'
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
        name="AddProduct"
        component={AddProduct}
        options={{
          title: 'Add product',
        }}
      />
    </Stack.Navigator>
  );
}
