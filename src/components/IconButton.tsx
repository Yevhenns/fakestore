import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {StyleSheet} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
} & TouchableOpacityProps;

export function IconButton({children, onPress, ...props}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...props}>
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
