
// import { createSlice } from "@reduxjs/toolkit";


// export const counterSlice = createSlice({
//     name: "Cart",
//     initialState: {
//         cartitems: [],
//     },

//     reducers: {
//         Addtocart: (state, action) => {
//             const IsExies = state.cartitems.find((item) => item.
//                 id
//                 === action.payload.
//                     id
//             )
//             console.log(IsExies);
//             if (IsExies) {
//                 IsExies.quanitity += 1

//             } else {
//                 state.cartitems.push({ ...action.payload, quanitity: 1 })
//                 console.log(action, "action");
//             }
//         },

//         Plus: (state, action) => {
//             const IsExies = state.cartitems.find((item) => item.id === action.payload.id)
//             if (IsExies) {
//                 IsExies.quanitity += 1
//             }
//         },
//         minus: (state, action) => {
//             const IsExies = state.cartitems.find((item) => item.id === action.payload.id)
//             if (IsExies && IsExies.quanitity > 1) {
//                 IsExies.quanitity -= 1
//             } else if (IsExies && IsExies.quanitity === 1) {
//                 state.cartitems = state.cartitems.filter((item) => item.id !== action.payload.id)
//             }
//         },
//         Delete: (state, action) => {
//             const IsExies = state.cartitems.find((item) => item.id === action.payload.id)
//             if (IsExies) {
//                 state.cartitems = state.cartitems.filter((item) => item.id !== action.payload.id)
//             }


//         }

//     },
// })


// export const { Addtocart, Plus, minus, Delete } = counterSlice.actions;

// export default counterSlice.reducer;