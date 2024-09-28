import {StyleSheet} from 'react-native';

import {colors, fonts} from '../../assets/styleVariables';

export const paragraphStyles = StyleSheet.create({
  layout: {
    color: colors.blackColor,
    fontSize: 18,
    fontFamily: fonts.mainFont,
  },

  error: {
    color: colors.errorColor,
    fontSize: 16,
  },
});
