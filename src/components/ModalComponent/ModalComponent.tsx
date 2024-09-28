import React from 'react';
import {Modal, View} from 'react-native';
import Toast from 'react-native-toast-message';

import {useAppDispatch} from '../../store/hooks';
import {deleteProduct} from '../../store/products/productsSlice';
import {Button} from '../Button/Button';
import {Paragraph} from '../Paragraph/Paragraph';
import {modalComponentStyles} from './ModalComponent.styles';

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
        <View style={modalComponentStyles.centeredView}>
          <View style={modalComponentStyles.modalWrapper}>
            <Paragraph>Delete product?</Paragraph>
            <View style={modalComponentStyles.buttonsSet}>
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
