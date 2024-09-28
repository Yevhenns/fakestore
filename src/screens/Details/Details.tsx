import React, {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {AdditionalInfo} from '../../components/AdditionalInfo/AdditionalInfo';
import {Button} from '../../components/Button/Button';
import {Empty} from '../../components/Empty/Empty';
import {ListItem} from '../../components/ListItem/ListItem';
import {ModalComponent} from '../../components/ModalComponent/ModalComponent';
import {useModalToggle} from '../../hooks/useModalToggle';
import {useSelectedProduct} from '../../hooks/useSelectedProduct';
import {useAppSelector} from '../../store/hooks';
import {getProductsAll} from '../../store/products/productsSlice';
import {detailsStyles} from './Details.styles';

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
    <ScrollView contentContainerStyle={detailsStyles.layout}>
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
