import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {colors} from '../assets/styleVariables';
import {AdditionalInfo} from '../components/AdditionalInfo';
import {Button} from '../components/Button';
import {Empty} from '../components/Empty';
import {ListItem} from '../components/ListItem';
import {ModalComponent} from '../components/ModalComponent';
import {useModalToggle} from '../hooks/useModalToggle';
import {useSelectedProduct} from '../hooks/useSelectedProduct';
import {useAppSelector} from '../store/hooks';
import {getProductsAll} from '../store/products/productsSlice';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function Details() {
  const productsAll = useAppSelector(getProductsAll);

  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();

  const product = productsAll.find(item => item.id === route.params?.productId);

  const {modalToggle, modalVisible} = useModalToggle();

  const {selectedProductId, setSelectedProductIdHandler} = useSelectedProduct();

  useEffect(() => {
    if (!product && route.params?.source) {
      navigation.navigate(route.params?.source as 'Home' | 'Favorites');
    }
  }, [navigation, product, route.params?.source]);

  if (!product) {
    return <Empty />;
  }

  return (
    <ScrollView contentContainerStyle={styles.layout}>
      <ListItem item={product} />
      <AdditionalInfo item={product} />
      <Button
        onPress={() => {
          setSelectedProductIdHandler(product.id);
          modalToggle();
        }}>
        Delete
      </Button>
      {selectedProductId !== null && (
        <ModalComponent
          modalVisible={modalVisible}
          modalToggle={modalToggle}
          selectedProductId={selectedProductId}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    gap: 10,
    padding: 10,
    backgroundColor: colors.whiteColor,
  },
});
