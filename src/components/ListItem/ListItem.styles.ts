import {StyleSheet} from 'react-native';

import {colors} from '../../assets/styleVariables';

export const listItemStyles = StyleSheet.create({
  layout: {
    padding: 10,
    flexDirection: 'row',
    gap: 10,
    backgroundColor: colors.whiteColor,
    overflow: 'hidden',
  },

  textWrapper: {
    flexShrink: 1,
  },

  buttonWrapper: {
    marginLeft: 'auto',
    width: 40,
    height: 40,
    alignItems: 'center',
  },
});
