import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {ModalComponent} from '../components/ModalComponent';
import {Paragraph} from '../components/Paragraph';
import {ProductList} from '../components/ProductList';
import {useModalToggle} from '../hooks/useModalToggle';
import {DetailsScreenNavigationProp} from '../navigation/StackNavigation';
import {useAppSelector} from '../store/hooks';
import {getFavoriteProducts} from '../store/products/productsSlice';

type FavoritesProps = {
  navigation: DetailsScreenNavigationProp;
};

export function Favorites({navigation}: FavoritesProps) {
  const [selectedProductId, setSelectedProductId] = useState<
    number | string | null
  >(null);

  const favoriteProducts = useAppSelector(getFavoriteProducts);
  const {modalToggle, modalVisible} = useModalToggle();

  const setSelectedProductIdHandler = (id: number | string) => {
    setSelectedProductId(id);
  };

  return (
    <View style={styles.layout}>
      {favoriteProducts.length === 0 ? (
        <Paragraph>Empty</Paragraph>
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
    padding: 10,
    backgroundColor: '#F0F2F8',
  },
});
