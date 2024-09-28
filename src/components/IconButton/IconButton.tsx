import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {iconButtonStyles} from './IconButton.styles';

type ButtonProps = TouchableOpacityProps;

export function IconButton({children, ...props}: ButtonProps) {
  return (
    <TouchableOpacity style={iconButtonStyles.button} {...props}>
      {children}
    </TouchableOpacity>
  );
}
