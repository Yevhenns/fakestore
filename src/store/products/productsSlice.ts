import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {getProducts} from './productsOperations';

const initialState = {
  productsAll: [] as ApiItem[],
  error: null as any,
  isLoading: false,
};

const productsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {},
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

export const getProductsAll = (state: RootState) =>
  state.allProducts.productsAll;
export const getIsLoading = (state: RootState) => state.allProducts.isLoading;
export const getError = (state: RootState) => state.allProducts.error;
