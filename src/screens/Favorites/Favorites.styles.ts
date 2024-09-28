import {StyleSheet} from 'react-native';

import {colors} from '../../assets/styleVariables';

export const favoritesStyles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
