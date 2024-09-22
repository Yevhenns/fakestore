import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';

import {colors} from '../assets/styleVariables';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {
  addToFavoriteAction,
  getFavoriteProducts,
  removeFromFavoriteAction,
} from '../store/products/productsSlice';
import {IconButton} from './IconButton';
import {Paragraph} from './Paragraph';
import {Heart} from './icons/Heart';
import {HeartFilled} from './icons/HeartFilled';

type ListItemProps = {
  item: Product;
};

export const ListItem = React.memo(({item}: ListItemProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteProducts = useAppSelector(getFavoriteProducts);

  const dispatch = useAppDispatch();

  const checkIsFavoriteProducts = useCallback(
    (id: number | string) => {
      return favoriteProducts.some(product => product.id === id);
    },
    [favoriteProducts],
  );

  const addToFavorite = () => {
    if (favoriteProducts.some(product => product.id === item.id)) {
      setIsFavorite(false);
      dispatch(removeFromFavoriteAction(item.id));
      Toast.show({
        type: 'info',
        text1: 'Removed from favorites',
        visibilityTime: 1500,
      });
    } else {
      setIsFavorite(true);
      dispatch(addToFavoriteAction(item));
      Toast.show({
        type: 'success',
        text1: 'Added to favorites',
        visibilityTime: 1500,
      });
    }
  };

  useEffect(() => {
    setIsFavorite(checkIsFavoriteProducts(item.id));
  }, [checkIsFavoriteProducts, item.id]);

  return (
    <View>
      <View style={styles.layout}>
        <Image
          source={{uri: item.image}}
          width={125}
          height={139}
          resizeMode="contain"
        />
        <View style={styles.textWrapper}>
          <Paragraph>{item.title}</Paragraph>
          <Paragraph>Price: {item.price} $</Paragraph>
        </View>
        <View style={styles.buttonWrapper}>
          <IconButton onPress={addToFavorite}>
            {!isFavorite ? (
              <Heart color={'#de612b'} />
            ) : (
              <HeartFilled color={'#de612b'} />
            )}
          </IconButton>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
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
