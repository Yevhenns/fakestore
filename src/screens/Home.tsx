import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button} from '../components/Button';
import {AddProductScreenNavigationProp} from '../navigation/StackNavigation';
import {ListItem} from '../components/ListItem';

type HomeProps = {
  navigation: AddProductScreenNavigationProp;
};

export function Home({navigation}: HomeProps) {
  const [products, setProducts] = useState<ApiItem[] | []>([]);

  const addItem = () => {
    navigation.navigate('AddProduct');
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const jsonData = await response.json();
      setProducts(jsonData);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.layout}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
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
});
