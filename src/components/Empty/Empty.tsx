import React from 'react';
import {View} from 'react-native';

import {Paragraph} from '../Paragraph/Paragraph';
import {emptyStyles} from './Empty.styles';

export function Empty() {
  return (
    <View style={emptyStyles.layout}>
      <Paragraph>Empty</Paragraph>
    </View>
  );
}
