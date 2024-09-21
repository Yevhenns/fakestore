import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// type DetailsProps = {
//   title: string;
//   price: number;
// };

export function Details({
  title = 'title',
  price = 450,
  image = 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
}) {
  return (
    <View style={styles.layout}>
      <Image source={{uri: image}} width={200} height={200} />
      <Text>{title}</Text>
      <Text>Price: {price}</Text>
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
