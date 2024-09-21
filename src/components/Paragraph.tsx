import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text} from 'react-native';

type ParagraphProps = PropsWithChildren;

export function Paragraph({children}: ParagraphProps) {
  return <Text style={styles.layout}>{children}</Text>;
}

const styles = StyleSheet.create({
  layout: {
    color: 'black',
    fontSize: 16,
  },
});
