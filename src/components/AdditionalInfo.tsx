import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Paragraph} from './Paragraph';

type AdditionalInfoProps = {item: Product};

export const AdditionalInfo = React.memo(({item}: AdditionalInfoProps) => {
  return (
    <View style={styles.layout}>
      <Paragraph>{item.description}</Paragraph>
      <Paragraph>Category: {item.category}</Paragraph>
      <View>
        <Paragraph>Rate: {item.rating.rate}</Paragraph>
        <Paragraph>Count: {item.rating.count}</Paragraph>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    gap: 10,
    backgroundColor: '#F0F2F8',
  },
});
