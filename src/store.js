import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/Product/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
