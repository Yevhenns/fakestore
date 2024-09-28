import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import {useAppDispatch} from '../../store/hooks';
import {getProducts} from '../../store/products/productsOperations';
import {ListItem} from '../ListItem/ListItem';
import {productListStyles} from './ProductList.styles';

type HomeProps = {
  modalToggle: () => void;
  setSelectedProductIdHandler: (id: number | string) => void;
  navigation: DetailsScreenNavigationProp;
  products: Product[];
  source: 'Home' | 'Favorites';
};

export function ProductList({
  navigation,
  modalToggle,
  setSelectedProductIdHandler,
  products,
  source,
}: HomeProps) {
  const dispatch = useAppDispatch();

  const showDetails = (id: number | string) => {
    navigation.navigate('Details', {productId: id, source});
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products.length]);

  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <TouchableOpacity
          style={productListStyles.listItem}
          onPress={() => showDetails(item.id)}
          onLongPress={() => {
            setSelectedProductIdHandler(item.id);
            modalToggle();
          }}>
          <ListItem item={item} />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={productListStyles.list}
    />
  );
}
