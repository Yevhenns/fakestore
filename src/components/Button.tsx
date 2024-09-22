import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {StyleSheet} from 'react-native';

import {colors, fonts} from '../assets/styleVariables';

type ButtonProps = TouchableOpacityProps;

export function Button({children, ...props}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.accentColor,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.whiteColor,
    fontSize: 24,
    fontFamily: fonts.mainFont,
  },
});
