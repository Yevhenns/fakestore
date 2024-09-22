import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {ModalComponent} from '../components/ModalComponent';
import {Paragraph} from '../components/Paragraph';
import {ProductList} from '../components/ProductList';
import {useModalToggle} from '../hooks/useModalToggle';
import {useSelectedProduct} from '../hooks/useSelectedProduct';
import {DetailsScreenNavigationProp} from '../navigation/HomeStackNavigation';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {getProducts} from '../store/products/productsOperations';
import {
  getError,
  getIsLoading,
  getProductsAll,
} from '../store/products/productsSlice';

type HomeProps = {
  navigation: DetailsScreenNavigationProp;
};

export function Home({navigation}: HomeProps) {
  const productsAll = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const isError = useAppSelector(getError);

  const dispatch = useAppDispatch();

  const {modalToggle, modalVisible} = useModalToggle();

  const {selectedProductId, setSelectedProductIdHandler} = useSelectedProduct();

  useEffect(() => {
    if (productsAll.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, productsAll.length]);

  if (isError) {
    return <Paragraph>Error</Paragraph>;
  }

  if (isLoading) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <View style={styles.layout}>
      <ProductList
        products={productsAll}
        modalToggle={modalToggle}
        setSelectedProductIdHandler={setSelectedProductIdHandler}
        navigation={navigation}
      />
      {selectedProductId !== null && (
        <ModalComponent
          modalVisible={modalVisible}
          modalToggle={modalToggle}
          selectedProductId={selectedProductId}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#F0F2F8',
  },
});
