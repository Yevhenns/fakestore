import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text} from 'react-native';

import {colors} from '../assets/colors';

type ParagraphProps = {
  error?: boolean;
} & PropsWithChildren;

export function Paragraph({children, error = false}: ParagraphProps) {
  return <Text style={[styles.layout, error && styles.error]}>{children}</Text>;
}

const styles = StyleSheet.create({
  layout: {
    color: colors.blackColor,
    fontSize: 18,
    fontFamily: 'SofadiOne-Regular',
  },

  error: {
    color: colors.errorColor,
    fontSize: 16,
  },
});
