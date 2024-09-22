import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text} from 'react-native';

type ParagraphProps = {
  error?: boolean;
} & PropsWithChildren;

export function Paragraph({children, error = false}: ParagraphProps) {
  return <Text style={[styles.layout, error && styles.error]}>{children}</Text>;
}

const styles = StyleSheet.create({
  layout: {
    color: 'black',
    fontSize: 18,
  },

  error: {
    color: 'red',
    fontSize: 16,
  },
});
