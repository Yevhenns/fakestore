import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

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
  // checkIsFavoriteProducts: (id: number | string) => boolean;
};

export const ListItem = React.memo(
  ({
    item,
  }: // checkIsFavoriteProducts
  ListItemProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const favoriteProducts = useAppSelector(getFavoriteProducts);

    const checkIsFavoriteProducts = useCallback(
      (id: number | string) => {
        return favoriteProducts.some(product => product.id === id);
      },
      [favoriteProducts],
    );

    const dispatch = useAppDispatch();

    const addToFavorite = () => {
      if (favoriteProducts.some(product => product.id === item.id)) {
        setIsFavorite(false);
        dispatch(removeFromFavoriteAction(item.id));
      } else {
        setIsFavorite(true);
        dispatch(addToFavoriteAction(item));
      }
    };

    useEffect(() => {
      setIsFavorite(checkIsFavoriteProducts(item.id));
    }, [checkIsFavoriteProducts, item.id]);

    return (
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
    );
  },
);

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#F0F2F8',
  },

  textWrapper: {
    flexShrink: 1,
  },

  buttonWrapper: {
    marginLeft: 'auto',
  },
});
