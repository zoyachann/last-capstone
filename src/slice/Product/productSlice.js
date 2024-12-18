import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products'); // Example API
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cart: [],
    categories: [],
    status: 'idle',
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        state.categories = [...new Set(action.payload.map((item) => item.category))];
      });
  },
});

export const { addToCart, setCategory } = productSlice.actions;
export default productSlice.reducer;
