import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {StyleSheet} from 'react-native';

type ButtonProps = {
  onPress?: () => void;
} & TouchableOpacityProps;

export function Button({children, onPress}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 38,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#de612b',
    fontSize: 18,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Comfortaa-Bold',
  },
});
