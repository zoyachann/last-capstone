import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  addToCart,
} from "../../slice/cartSlice";

const products = [];
const ModalDetails = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatedTotalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [cart]);

  const cartContent = () => (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ color: "#019376", fontWeight: "bold" }}>
          <ShoppingBagIcon sx={{ marginRight: "5px" }} />
          {cart.length} Item(s)
        </Typography>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <hr style={{ borderColor: "#e0e0e0" }} />
      <Box sx={{ flex: 1, overflowY: "auto", px: 2 }}>
        {cart.length > 0 ? (
          cart.map((product) => (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                py: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  sx={{
                    minWidth: 30,
                    height: 30,
                    border: "1px solid #ddd",
                    borderRadius: 2,
                    fontWeight: "bold",
                  }}
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                >
                  -
                </Button>
                <Typography sx={{ mx: 2, fontWeight: "bold" }}>
                  {product.quantity}
                </Typography>
                <Button
                  sx={{
                    minWidth: 30,
                    height: 30,
                    border: "1px solid #ddd",
                    borderRadius: 2,
                    fontWeight: "bold",
                  }}
                  onClick={() => dispatch(increaseQuantity(product.id))}
                >
                  +
                </Button>
              </Box>
              <img
                src={product.img}
                alt={product.title}
                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
              />
              <Box sx={{ mx: 2, flex: 1 }}>
                <Typography sx={{ fontWeight: "bold" }}>{product.title}</Typography>
                <Typography sx={{ color: "#757575" }}>
                  ${typeof product.price === "number"
                    ? product.price.toFixed(2)
                    : product.price}
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: "bold" }}>
                ${(product.price * product.quantity).toFixed(2)}
              </Typography>
              <IconButton
                onClick={() => dispatch(removeFromCart(product.id))}
                sx={{ color: "red" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          ))
        ) : (
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Typography>No products found</Typography>
          </Box>
        )}
      </Box>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: "20px",
          width: "100%",

          backgroundColor: "#019376",
          color: "#fff",
          borderRadius: "25px",
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
          padding: "10px 30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        Checkout (${totalPrice.toFixed(2)})
      </Button>
    </Box>
  );

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 2 }}>
        {products.map((product) => (
          <Card key={product.id} sx={{ width: 300, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <img
                src={product.img}
                alt={product.title}
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: 5 }}
              />
              <Typography sx={{ fontWeight: "bold", mt: 2 }}>{product.title}</Typography>
              <Typography sx={{ color: "#757575", mb: 2 }}>${product.price}</Typography>
              <Button
                variant="contained"
                startIcon={<ShoppingBasketIcon />}
                sx={{
                  backgroundColor: "#019376",
                  color: "#fff",
                  width: "100%",
                  borderRadius: "25px",
                }}
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>


      <Button
  variant="contained"
  onClick={() => setDrawerOpen(true)}
  sx={{
    position: "fixed", // Keeps the button fixed in the viewport
    top: "50%", // Vertically centered
    right: "10px", // Positioned 10px from the right edge
    transform: "translateY(-50%)", // Ensures perfect vertical centering
    backgroundColor: "#019376",
    color: "#fff",
    borderRadius: "12px",
    padding: "10px 15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "80px",
    boxShadow: 3,
    zIndex: 1000, // Ensures it stays above other components
    "@media (max-width: 600px)": {
      display: "none", // Hides the button on smaller screens
    },
  }}
>
  <ShoppingBagIcon sx={{ marginBottom: "5px" }} />
  <Typography
    variant="caption"
    sx={{ fontSize: "14px", fontWeight: "bold" }}
  >
    {cart.length} Item
  </Typography>
  <Typography
    variant="caption"
    sx={{
      fontSize: "14px",
      fontWeight: "bold",
      backgroundColor: "#fff",
      color: "#019376",
      padding: "2px 8px",
      borderRadius: "8px",
      marginTop: "5px",
    }}
  >
    ${totalPrice.toFixed(2)}
  </Typography>
</Button>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: "100%", maxWidth: 450 },
        }}
      >
        {cartContent()}
      </Drawer>
    </Box>
  );
};

export default ModalDetails;
