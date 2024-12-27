import React, { useEffect, useState } from "react";
import { Box, Button, Card, Collapse, Grid, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";

// Import images
import Biscuit1 from "../../asess/biscuts01.webp";
import Biscuit2 from "../../asess/biscuts02.webp";
import Biscuit3 from "../../asess/crawford_shortieImage.webp";
import Biscuit4 from "../../asess/Hill_Biscuits_Mini_Pack_MixImage.webp";
import Biscuit5 from "../../asess/Jammie_DodgersImage.webp";
import Biscuit6 from "../../asess/julis_cheese_crackersImage.webp";
import Chocolate7 from "../../asess/artiach_filipinoImage.webp";
import Chocolate8 from "../../asess/cadbury_dairy_milk_crispello.webp";
import Chocolate9 from "../../asess/cadbury-dairy-milk-reclose.webp";
import Chocolate10 from "../../asess/cloetta.webp";
import Chocolate11 from "../../asess/hersheys_kisses.webp";
import Chocolate12 from "../../asess/m&m_funsize.webp";
import Chocolatemix13 from "../../asess/nestle_kitkat.webp";
import Chocolatemix14 from "../../asess/artiach_filipinoImage.webp";
import Chocolatemix15 from "../../asess/khong_guan_orange_cream.webp";
import Chocolatemix16 from "../../asess/nestle_butterfinger.webp";
import Chocolatemix17 from "../../asess/snikers_snacksize.webp";
import Chocolatemix18 from "../../asess/cloetta (1).webp";
import lays19 from "../../asess/lays-kettle-cooked.webp";
import lays20 from "../../asess/lays-sour-cream.webp";
import lays21 from "../../asess/lays_baked.webp";
import lays22 from "../../asess/lotus_biscoffImage.webp";
import lays23 from "../../asess/nims_apple_fruit.webp";
import lays24 from "../../asess/Ready-Salted-Crisps.webp";
import Mixbiscuits25 from "../../asess/indomie_special_chicken.webp";
import Mixbiscuits26 from "../../asess/maggi_bbq.webp";
import Mixbiscuits27 from "../../asess/maggi_beef.webp";
import Mixbiscuits28 from "../../asess/maggi_biriyani.webp";
import Mixbiscuits29 from "../../asess/koka_curry.webp";
import Mixbiscuits30 from "../../asess/kame_stir_fry.webp";

const Product = [
    {
    id: 1,
    img: Biscuit1,
    Category: "Nuts & Biscuits",
    title: "Khong Guan Orange Cream",
    price: "$ 5",
  },
  {
    id: 2,
    img: Biscuit2,
    Category: "Nuts & Biscuits",
    title: "Belmont Custard ",
    price: "$ 0.8",
  },
  {
    id: 3,
    img: Biscuit3,
    Category: "Nuts & Biscuits",
    title: "Crawford Digestives",
    price: "$ 10",
  },
  {
    id: 4,
    img: Biscuit4,
    Category: "Nuts & Biscuits",
    title: "Jammie Dodgers Raspberry",
    price: "$ 14",
  },
  {
    id: 5,
    img: Biscuit5,
    Category: "Nuts & Biscuits",
    title: "Crawford Shortie",
    price: "$ 25",
  },
  {
    id: 6,
    img: Biscuit6,
    Category: "Nuts & Biscuits",
    title: "Lotus Biscoff",
    price: "$ 2.5",
  },
  {
    id: 7,
    img: Chocolate7,
    Category: "Chocolates",
    title: "Filipinos",
    price: "$ 5.5",
  },
  {
    id: 8,
    img: Chocolate8,
    Category: "Chocolates",
    title: "Dairy Milk Reclose",
    price: "$ 5.7",
  },
  {
    id: 9,
    img: Chocolate9,
    Category: "Chocolates",
    title: "Cloetta Sprinkle",
    price: "$ 5.25",
  },
  {
    id: 10,
    img: Chocolate10,
    Category: "Chocolates",
    title: "Cloetta Chocowoffle Crispy",
    price: "$ 6.5",
  },
  {
    id: 11,
    img: Chocolate11,
    Category: "Chocolates",
    title: "Cadbury Zip",
    price: "$ 5.75",
  },
  {
    id: 12,
    img: Chocolate12,
    Category: "Chocolates",
    title: "Dairy Milk Crispello",
    price: "$ 3.5",
  },
  {
    id: 13,
    img: Chocolatemix13,
    Category: "Crisps",
    title: "Snikers Snack Size",
    price: "$ 4.25",
  },
  {
    id: 14,
    img: Chocolatemix14,
    Category: "Crisps",
    title: "Snikers Slice",
    price: "$ 7.25",
  },
  {
    id: 15,
    img: Chocolatemix15,
    Category: "Crisps",
    title: "M & M Funsize",
    price: "$ 8.5",
  },
  {
    id: 16,
    img: Chocolatemix16,
    Category: "Crisps",
    title: "Hersheys Kisses",
    price: "$ 9.5",
  },
  {
    id: 17,
    img: Chocolatemix17,
    Category: "Crisps",
    title: "Nestle Kitkat",
    price: "$ 10.5",
  },
  {
    id: 18,
    img: Chocolatemix18,
    Category: "Crisps",
    title: "Nestle Butterfinger",
    price: "$ 0.5",
  },
  {
    id: 19,
    img: lays19,
    Category: "Puzzles lays",
    title: "Lays Baked",
    price: "$ 2.25",
  },
  {
    id: 20,
    img: lays20,
    Category: "Puzzles lays",
    title: "Lays Sea Salted",
    price: "$ 8.75",
  },
  {
    id: 21,
    img: lays21,
    Category: "Puzzles lays",
    title: "Lays Sour Cream",
    price: "$ 6.25",
  },
  {
    id: 22,
    img: lays22,
    Category: "Puzzles lays",
    title: "Snack Rite Ready Saled",
    price: "$ 3.75",
  },
  {
    id: 23,
    img: lays23,
    Category: "Puzzles lays",
    title: "Nims Apple Crisp",
    price: "$ 8.5",
  },
  {
    id: 24,
    img: lays24,
    Category: "Puzzles lays",
    title: "Snack Rite Ready Saled",
    price: "$ 5.25",
  },
  {
    id: 25,
    img: Mixbiscuits25,
    Category: "Snacks ",
    title: "Hill Mini Pack Mix",
    price: "$ 1.75",
  },
  {
    id: 26,
    img: Mixbiscuits26,
    Category: "Snacks",
    title: "Khong Guan Premium Marie",
    price: "$ 5.5",
  },
  {
    id: 27,
    img: Mixbiscuits27,
    Category: "Snacks",
    title: "Jammie Dodgers Raspberry",
    price: "$ 7,25",
  },
  {
    id: 28,
    img: Mixbiscuits28,
    Category: "Snacks",
    title: "Puzzles Crips Ready Salted",
    price: "$ 8.75",
  },
  {
    id: 29,
    img: Mixbiscuits29,
    Category: "Snacks",
    title: "Doritos Tangy Cheese",
    price: "$ 6.75",
  },
  {
    id: 30,
    img: Mixbiscuits30,
    category: "Snacks",
    title: "Lays Kettle Cooked",
    price: "$ 10.25",
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [open, setOpen] = useState(false); 
  const isMobileOrTablet = useMediaQuery("(max-width: 992px)"); 

  const filteredProducts = selectedCategory
    ? Product.filter((product) => product.Category === selectedCategory)
    : Product;

  return (
    <Box className="d-flex  my-5 ">
   
      <Box className="mt-5 justify-content-between">
     
        {!isMobileOrTablet && (
          <Box
            className="d-none d-sm-none d-md-none d-lg-block"
            sx={{
              marginRight: "30px",
              width: "250px",
              height: "600px",
              backgroundColor: "#fff",
              padding: 2,
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box>
              <Button className="text-black pt-4 " onClick={() => setSelectedCategory("")}>
                All Products
              </Button>
            </Box>
            <Box>
              <Button className="text-black py-4" onClick={() => setSelectedCategory("Nuts & Biscuits")}>
                Nuts & Biscuits
              </Button>
            </Box>
            <Box>
              <Button className="text-black" onClick={() => setSelectedCategory("Chocolates")}>
                Chocolates
              </Button>
            </Box>
            <Box>
              <Button className="text-black py-4" onClick={() => setSelectedCategory("Crisps")}>
                Crisps
              </Button>
            </Box>
            <Box>
              <Button className="text-black" onClick={() => setSelectedCategory("Puzzles lays")}>
                Puzzles lays
              </Button>
            </Box>
          </Box>
        )}

        {/* For Mobile and Tablet Screens */}
        {isMobileOrTablet && (
          <Box className="">
            <Button
              variant="contained"
           
              onClick={() => setOpen(!open)}
              sx={{ width: "100%", mb: "2" ,backgroundColor: "#009688", display:"" }}
            >
              Categories
            </Button>
            <Collapse in={open}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: 2,
                  borderRadius: "8px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box>
                  <Button className="text-black" onClick={() => setSelectedCategory("")}>
                    All Products
                  </Button>
                </Box>
                <Box>
                  <Button className="text-black" onClick={() => setSelectedCategory("Nuts & Biscuits")}>
                    Nuts & Biscuits
                  </Button>
                </Box>
                <Box>
                  <Button className="text-black" onClick={() => setSelectedCategory("Chocolates")}>
                    Chocolates
                  </Button>
                </Box>
                <Box>
                  <Button className="text-black" onClick={() => setSelectedCategory("Crisps")}>
                    Crisps
                  </Button>
                </Box>
                <Box>
                  <Button className="text-black" onClick={() => setSelectedCategory("Puzzles lays")}>
                    Puzzles lays
                  </Button>
                </Box>
              </Box>
            </Collapse>
          </Box>
        )}
      </Box>

      
      <Grid container className="mt-3">
        {filteredProducts?.map((Product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={2} key={index}>
            <Card
              sx={{
                marginTop: "20px",
                padding: "20px",
                cursor: "pointer",
                width: "250px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                className="text-center"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "140px",
                }}
              >
                <img
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="product-img my-5"
                  src={Product.img}
                  alt={Product.title}
                  onClick={() => navigate(`./ProductDetailsPage/${Product?.id}`)}
                />
              </Box>
              <Typography variant="body" className="mt-3 fw-bold">
                {Product?.title}
              </Typography>
              <Box
                className="d-flex justify-content-between align-items-center mt-2"
                sx={{ width: "100%" }}
              >
                <Typography variant="body" className="mt-3 fs-6 fw-bold text-success">
                  {Product?.price}
                </Typography>
                <Box               
                  sx={{
                    "&:hover": {
                      backgroundColor: "#009688",
                      "& .MuiTypography-root": { color: "white" },
                      "& .MuiSvgIcon-root": { color: "white" },
                    },
                  }}
                  className="px-3 py-1 rounded-5 mt-5 mb-3 d-flex border border-1"
                >
                  <ShoppingBasketIcon sx={{ marginRight: "5px", color: "#009688" }} />
                  <Typography variant="button" sx={{ color: "#009688" }}>
                    Cart
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
