import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {RouteProp, useRoute} from '@react-navigation/native';

import {colors} from '../assets/styleVariables';
import {AdditionalInfo} from '../components/AdditionalInfo';
import {ListItem} from '../components/ListItem';
import {RootStackParamList} from '../navigation/HomeStackNavigation';
import {useAppSelector} from '../store/hooks';
import {getProductsAll} from '../store/products/productsSlice';

export function Details() {
  const productsAll = useAppSelector(getProductsAll);

  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();

  const product = productsAll.find(item => item.id === route.params?.productId);

  return (
    <ScrollView style={styles.layout}>
      {product && (
        <>
          <ListItem item={product} />
          <AdditionalInfo item={product} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.mainBackgroundColor,
  },
});
