// // AddToCart.js
// import React from "react";
// import { Box, Button, Typography } from "@mui/material";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

// const AddToCart = ({ product, cart, setCart }) => {
//   const handleAddToCart = () => {
//     const existingProduct = cart.find((item) => item.id === product.id);
//     if (existingProduct) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   return (
//     <Box
//       onClick={handleAddToCart}
//       sx={{
//         "&:hover": {
//           backgroundColor: "#009688",
//           "& .MuiTypography-root": { color: "white" },
//           "& .MuiSvgIcon-root": { color: "white" },
//         },
//       }}
//       className="px-3 py-1 rounded-5 mt-5 mb-3 d-flex border border-1"
//     >
//       <ShoppingBasketIcon sx={{ marginRight: "5px", color: "#009688" }} />
//       <Typography variant="button" sx={{ color: "#009688" }}>
//         Add to Cart
//       </Typography>
//     </Box>
//   );
// };

// export default AddToCart;
