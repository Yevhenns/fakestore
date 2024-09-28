import React from 'react';
import {View} from 'react-native';

import {Paragraph} from '../Paragraph/Paragraph';
import {additionalInfoStyles} from './AdditionalInfo.styles';

type AdditionalInfoProps = {item: Product};

export const AdditionalInfo = React.memo(({item}: AdditionalInfoProps) => {
  return (
    <View style={additionalInfoStyles.layout}>
      <Paragraph>{item.description}</Paragraph>
      <Paragraph>Category: {item.category}</Paragraph>
      <View>
        <Paragraph>Rate: {item.rating.rate}</Paragraph>
        <Paragraph>Count: {item.rating.count}</Paragraph>
      </View>
    </View>
  );
});
