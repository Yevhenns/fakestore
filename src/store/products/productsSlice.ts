import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {getProducts} from './productsOperations';

const initialState = {
  productsAll: [] as Product[],
  favoriteProducts: [] as Product[],
  error: null as any,
  isLoading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: {payload: Product}) {
      state.productsAll = [action.payload, ...state.productsAll];
    },
    deleteProduct(state, action: {payload: number | string}) {
      const filteredArr = state.productsAll.filter(
        item => item.id !== action.payload,
      );
      state.productsAll = filteredArr;
    },
    addToFavoriteAction(state, action: {payload: Product}) {
      state.favoriteProducts = [...state.favoriteProducts, action.payload];
    },
    removeFromFavoriteAction(state, action: {payload: number | string}) {
      state.favoriteProducts = state.favoriteProducts.filter(
        item => item.id !== action.payload,
      );
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        if (!action.payload) {
          state.error = true;
          state.isLoading = false;
          return;
        }
        if (action.payload) {
          state.productsAll = action.payload;
          state.isLoading = false;
        }
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        return;
      }),
});

export const productsReducer = productsSlice.reducer;

export const getProductsAll = (state: RootState) => state.products.productsAll;
export const getFavoriteProducts = (state: RootState) =>
  state.products.favoriteProducts;
export const getIsLoading = (state: RootState) => state.products.isLoading;
export const getError = (state: RootState) => state.products.error;

export const {
  addProduct,
  deleteProduct,
  addToFavoriteAction,
  removeFromFavoriteAction,
} = productsSlice.actions;
