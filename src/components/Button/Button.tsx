import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {buttonStyles} from './Button.styles';

type ButtonProps = TouchableOpacityProps;

export function Button({children, ...props}: ButtonProps) {
  return (
    <TouchableOpacity style={buttonStyles.button} {...props}>
      <Text style={buttonStyles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}
