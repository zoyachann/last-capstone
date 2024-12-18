import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    products: [{ id: "1", name: "apple" }]
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToCart: (state) => {
            state.value += 1
        }
    }

});

export const { addToCart } = counterSlice.actions;

export default counterSlice.reducer;