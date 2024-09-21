import {createAsyncThunk} from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk<
  Product[],
  void,
  {
    rejectValue: string;
  }
>('products/getProductsAll', async (_, {rejectWithValue}) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonData = await response.json();
    return jsonData;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
