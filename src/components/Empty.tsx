import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Paragraph} from './Paragraph';

export function Empty() {
  return (
    <View style={styles.layout}>
      <Paragraph>Empty</Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
