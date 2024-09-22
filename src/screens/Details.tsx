import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {RouteProp, useRoute} from '@react-navigation/native';

import {colors} from '../assets/styleVariables';
import {AdditionalInfo} from '../components/AdditionalInfo';
import {Button} from '../components/Button';
import {ListItem} from '../components/ListItem';
import {ModalComponent} from '../components/ModalComponent';
import {useModalToggle} from '../hooks/useModalToggle';
import {useSelectedProduct} from '../hooks/useSelectedProduct';
import {RootStackParamList} from '../navigation/HomeStackNavigation';
import {useAppSelector} from '../store/hooks';
import {getProductsAll} from '../store/products/productsSlice';

export function Details() {
  const productsAll = useAppSelector(getProductsAll);

  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();

  const product = productsAll.find(item => item.id === route.params?.productId);

  const {modalToggle, modalVisible} = useModalToggle();

  const {selectedProductId, setSelectedProductIdHandler} = useSelectedProduct();

  return (
    <ScrollView style={styles.layout}>
      {product && (
        <View style={styles.wrapper}>
          <ListItem item={product} />
          <AdditionalInfo item={product} />
          <Button
            onPress={() => {
              setSelectedProductIdHandler(product.id);
              modalToggle();
            }}>
            Delete
          </Button>
          {selectedProductId !== null && (
            <ModalComponent
              modalVisible={modalVisible}
              modalToggle={modalToggle}
              selectedProductId={selectedProductId}
            />
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    gap: 10,
    display: 'flex',
    flex: 1,
    padding: 10,
    backgroundColor: colors.whiteColor,
  },

  wrapper: {gap: 10, display: 'flex'},
});
