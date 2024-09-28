import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';

import {paragraphStyles} from './Paragraph.styles';

type ParagraphProps = {
  error?: boolean;
} & PropsWithChildren;

export function Paragraph({children, error = false}: ParagraphProps) {
  return (
    <Text style={[paragraphStyles.layout, error && paragraphStyles.error]}>
      {children}
    </Text>
  );
}
