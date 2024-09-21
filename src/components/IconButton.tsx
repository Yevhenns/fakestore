import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {StyleSheet} from 'react-native';

type ButtonProps = TouchableOpacityProps;

export function IconButton({children, ...props}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
