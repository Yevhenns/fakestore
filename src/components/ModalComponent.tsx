import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

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
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          modalToggle;
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  modalWrapper: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    gap: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#de612b',
  },

  buttonsSet: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
