import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {RouteProp, useRoute} from '@react-navigation/native';

import {colors} from '../assets/styleVariables';
import {AdditionalInfo} from '../components/AdditionalInfo';
import {Button} from '../components/Button';
import {Empty} from '../components/Empty';
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

  if (!product) {
    return <Empty />;
  }

  return (
    <ScrollView contentContainerStyle={styles.layout}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    gap: 10,
    padding: 10,
    backgroundColor: colors.whiteColor,
  },
});
