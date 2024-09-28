import {StyleSheet} from 'react-native';

import {colors} from '../../assets/styleVariables';

export const modalComponentStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: colors.modalBackgroundColor,
  },

  modalWrapper: {
    backgroundColor: colors.whiteColor,
    padding: 40,
    alignItems: 'center',
    gap: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.accentColor,
  },

  buttonsSet: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
  },
});
