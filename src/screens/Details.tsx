import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// type DetailsProps = {
//   title: string;
//   price: number;
// };

export function Details({title = 'title', price = 450}) {
  return (
    <View style={styles.layout}>
      <Image
        source={{uri: 'https://placehold.co/600x400/orange'}}
        width={200}
        height={200}
      />
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
