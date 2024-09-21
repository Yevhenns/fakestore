import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function AddItem() {
  return (
    <View style={styles.layout}>
      <Text>AddItem</Text>
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
