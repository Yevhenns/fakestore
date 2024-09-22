import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';

import {colors} from '../assets/styleVariables';
import {useAppDispatch} from '../store/hooks';
import {deleteProduct} from '../store/products/productsSlice';
import {Button} from './Button';
import {Paragraph} from './Paragraph';

type ParagraphProps = {
  modalVisible: boolean;
  modalToggle: () => void;
  selectedProductId: string | number;
};

export function ModalComponent({
  modalVisible,
  modalToggle,
  selectedProductId,
}: ParagraphProps) {
  const dispatch = useAppDispatch();

  const deleteProductHandler = (id: number | string) => {
    dispatch(deleteProduct(id));
    modalToggle();
    Toast.show({
      type: 'error',
      text1: 'Product deleted',
      visibilityTime: 1500,
    });
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          modalToggle();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalWrapper}>
            <Paragraph>Delete product?</Paragraph>
            <View style={styles.buttonsSet}>
              <Button onPress={() => deleteProductHandler(selectedProductId)}>
                Yes
              </Button>
              <Button onPress={modalToggle}>No</Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
