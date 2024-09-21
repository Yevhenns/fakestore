import {useState} from 'react';

export const useModalToggle = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const modalToggle = () => {
    setModalVisible(!modalVisible);
  };

  return {modalVisible, modalToggle};
};
