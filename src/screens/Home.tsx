import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {Button} from '../components/Button';
import {ListItem} from '../components/ListItem';
import {Paragraph} from '../components/Paragraph';
import {AddProductScreenNavigationProp} from '../navigation/StackNavigation';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {getProducts} from '../store/products/productsOperations';
import {
  getError,
  getIsLoading,
  getProductsAll,
} from '../store/products/productsSlice';

type HomeProps = {
  navigation: AddProductScreenNavigationProp;
};

export function Home({navigation}: HomeProps) {
  const dispatch = useAppDispatch();

  const productsAll = useAppSelector(getProductsAll);
  const isLoading = useAppSelector(getIsLoading);
  const isError = useAppSelector(getError);

  const addItem = () => {
    navigation.navigate('AddProduct');
  };

  const showDetails = (id: number) => {
    navigation.navigate('Details', {productId: id});
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
      <FlatList
        data={productsAll}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => showDetails(item.id)}>
            <ListItem item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <Button onPress={addItem}>Add item</Button>
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

  list: {
    gap: 10,
  },

  listItem: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: '#de612b',
  },
});
