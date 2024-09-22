/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors, fonts} from '../assets/styleVariables';
import {Heart} from '../components/icons/Heart';
import {Home} from '../components/icons/Home';
import {Plus} from '../components/icons/Plus';
import {AddProduct} from '../screens/AddProduct';
import {useAppSelector} from '../store/hooks';
import {getFavoriteProducts} from '../store/products/productsSlice';
import {FavoriteStackNavigation} from './FavoriteStackNavigation';
import {HomeStackNavigation} from './HomeStackNavigation';

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  const favoriteLength = useAppSelector(getFavoriteProducts).length;

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: colors.accentColor},
          tabBarActiveTintColor: colors.whiteColor,
          tabBarInactiveTintColor: colors.blackColor,
          headerTitleStyle: {
            fontFamily: fonts.mainFont,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => <Home color={color} />,
            headerShown: false,
          }}
          name="HomeScreen"
          component={HomeStackNavigation}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => <Plus color={color} />,
          }}
          name="Add product"
          component={AddProduct}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => <Heart color={color} />,
            tabBarBadge: favoriteLength,
            headerShown: false,
          }}
          name="Favorites"
          component={FavoriteStackNavigation}
        />
      </Tab.Navigator>
    </>
  );
}
