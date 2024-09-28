import {StyleSheet} from 'react-native';

import {colors} from '../../assets/styleVariables';

export const productListStyles = StyleSheet.create({
  list: {
    gap: 10,
    padding: 10,
  },

  listItem: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: colors.shadowColor,
    elevation: 5,
  },
});
