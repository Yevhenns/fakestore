import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../assets/styleVariables';
import {ModalComponent} from '../components/ModalComponent';
import {Paragraph} from '../components/Paragraph';
import {ProductList} from '../components/ProductList';
import {useModalToggle} from '../hooks/useModalToggle';
import {useSelectedProduct} from '../hooks/useSelectedProduct';
import {DetailsScreenNavigationProp} from '../navigation/HomeStackNavigation';
import {useAppSelector} from '../store/hooks';
import {getFavoriteProducts} from '../store/products/productsSlice';

type FavoritesProps = {
  navigation: DetailsScreenNavigationProp;
};

export function Favorites({navigation}: FavoritesProps) {
  const favoriteProducts = useAppSelector(getFavoriteProducts);

  const {modalToggle, modalVisible} = useModalToggle();

  const {selectedProductId, setSelectedProductIdHandler} = useSelectedProduct();

  return (
    <View style={styles.layout}>
      {favoriteProducts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Paragraph>Empty</Paragraph>
        </View>
      ) : (
        <>
          <ProductList
            products={favoriteProducts}
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
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
