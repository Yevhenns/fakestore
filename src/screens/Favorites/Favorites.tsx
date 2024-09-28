import React from 'react';
import {View} from 'react-native';

import {Empty} from '../../components/Empty/Empty';
import {ModalComponent} from '../../components/ModalComponent/ModalComponent';
import {ProductList} from '../../components/ProductList/ProductList';
import {useModalToggle} from '../../hooks/useModalToggle';
import {useSelectedProduct} from '../../hooks/useSelectedProduct';
import {useAppSelector} from '../../store/hooks';
import {getFavoriteProducts} from '../../store/products/productsSlice';
import {favoritesStyles} from './Favorites.styles';

type FavoritesProps = {
  navigation: DetailsScreenNavigationProp;
};

export function Favorites({navigation}: FavoritesProps) {
  const favoriteProducts = useAppSelector(getFavoriteProducts);

  const {modalToggle, modalVisible} = useModalToggle();

  const {selectedProductId, setSelectedProductIdHandler} = useSelectedProduct();

  return (
    <View style={favoritesStyles.layout}>
      {favoriteProducts.length === 0 ? (
        <Empty />
      ) : (
        <>
          <ProductList
            products={favoriteProducts}
            modalToggle={modalToggle}
            setSelectedProductIdHandler={setSelectedProductIdHandler}
            source="Favorites"
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
