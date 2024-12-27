import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/addToCard';
import productReducer from './slice/Product/productSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});

export default store;

