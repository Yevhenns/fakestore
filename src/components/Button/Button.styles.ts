import {StyleSheet} from 'react-native';

import {colors, fonts} from '../../assets/styleVariables';

export const buttonStyles = StyleSheet.create({
  button: {
    height: 40,
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.accentColor,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.whiteColor,
    fontSize: 24,
    fontFamily: fonts.mainFont,
  },
});
