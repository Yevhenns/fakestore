import {StyleSheet} from 'react-native';

import {colors, fonts} from '../../assets/styleVariables';

export const addProductStyles = StyleSheet.create({
  layout: {
    padding: 10,
    gap: 10,
    backgroundColor: colors.mainBackgroundColor,
  },

  input: {
    width: '100%',
    padding: 12,
    borderRadius: 5,
    borderColor: colors.accentColor,
    borderWidth: 2,
    color: colors.blackColor,
    fontSize: 18,
    fontFamily: fonts.mainFont,
  },

  dropdownPlaceholderStyle: {
    color: colors.greyColor,
    fontSize: 18,
    fontFamily: fonts.mainFont,
  },

  dropdownTextStyle: {
    color: colors.blackColor,
    fontSize: 18,
    fontFamily: fonts.mainFont,
  },

  errorWrapper: {
    height: 20,
  },
});
