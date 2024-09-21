import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Details} from '../screens/Details';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {AddProduct} from '../screens/AddProduct';

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
