import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Paragraph} from './Paragraph';

type ListItemProps = {item: ApiItem};

export function ListItem({item}: ListItemProps) {
  return (
    <View style={styles.layout}>
      <Image source={{uri: item.image}} width={125} height={139} />
      <View style={styles.textWrapper}>
        <Paragraph>{item.title}</Paragraph>
        <Paragraph>Price: {item.price} $</Paragraph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#de612b',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#F0F2F8',
  },

  textWrapper: {
    flexShrink: 1,
  },
});
