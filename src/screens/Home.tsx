import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Button} from '../components/Button';
import {HomeScreenNavigationProp} from '../navigation/StackNavigation';
import {ListItem} from '../components/ListItem';

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

export function Home({navigation}: HomeProps) {
  const [products, setProducts] = useState<ApiItem[] | []>([]);

  const addItem = () => {
    navigation.navigate('AddItem');
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
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <Button onPress={() => navigation.navigate('Details')}>Details</Button>
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
