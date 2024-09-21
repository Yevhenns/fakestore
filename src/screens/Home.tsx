import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {ModalComponent} from '../components/ModalComponent';
import {Paragraph} from '../components/Paragraph';
import {ProductList} from '../components/ProductList';
import {useModalToggle} from '../hooks/useModalToggle';
import {DetailsScreenNavigationProp} from '../navigation/StackNavigation';
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
  const [selectedProductId, setSelectedProductId] = useState<
    number | string | null
  >(null);

  const dispatch = useAppDispatch();

  const productsAll = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const isError = useAppSelector(getError);

  const {modalToggle, modalVisible} = useModalToggle();

  const setSelectedProductIdHandler = (id: number | string) => {
    setSelectedProductId(id);
  };

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
    padding: 10,
    gap: 10,
    backgroundColor: '#DACAB0',
  },
});
