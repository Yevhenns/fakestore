import React, {useEffect} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import {ListItem} from '../components/ListItem';
import {DetailsScreenNavigationProp} from '../navigation/HomeStackNavigation';
import {useAppDispatch} from '../store/hooks';
import {getProducts} from '../store/products/productsOperations';

type HomeProps = {
  modalToggle: () => void;
  setSelectedProductIdHandler: (id: number | string) => void;
  navigation: DetailsScreenNavigationProp;
  products: Product[];
};

export function ProductList({
  navigation,
  modalToggle,
  setSelectedProductIdHandler,
  products,
}: HomeProps) {
  const dispatch = useAppDispatch();

  const showDetails = (id: number | string) => {
    navigation.navigate('Details', {productId: id});
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
          style={styles.listItem}
          onPress={() => showDetails(item.id)}
          onLongPress={() => {
            setSelectedProductIdHandler(item.id);
            modalToggle();
          }}>
          <ListItem item={item} />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
    padding: 10,
  },

  listItem: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#171717',
    elevation: 5,
  },
});
