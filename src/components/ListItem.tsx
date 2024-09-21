import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Paragraph} from './Paragraph';

type ListItemProps = {item: Product};

export const ListItem = React.memo(({item}: ListItemProps) => {
  return (
    <View style={styles.layout}>
      <Image
        source={{uri: item.image}}
        width={125}
        height={139}
        resizeMode="contain"
      />
      <View style={styles.textWrapper}>
        <Paragraph>{item.title}</Paragraph>
        <Paragraph>Price: {item.price} $</Paragraph>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#F0F2F8',
  },

  textWrapper: {
    flexShrink: 1,
  },
});
