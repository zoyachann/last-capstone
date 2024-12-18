
// export const store = configureStore({
//   reducer: {
//     product: productReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/add-cart/addCartSlice';
import productReducer from './slice/Product/productSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});

export default store;

