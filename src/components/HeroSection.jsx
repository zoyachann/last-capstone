import React from "react";
import heroImage from "../asess/grocery.webp";
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/material";



const HeroSection = () => {
  return (
    <Box
      className="d-none d-lg-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box className="position-absolute top-0 start-0 w-100 h-100"></Box>
      <Box className="position-relative z-3 justify-content-center">
        <h1 className="display-5 fw-bold text-black">Groceries Delivered in 90 Minutes</h1>
        <p className="lead text-black">
          Get your healthy foods & snacks delivered at your doorsteps all day every day
        </p>
        <Box className="d-flex justify-content-center align-items-center my-4 w-100 border border-0">
          <input
            type="text"
            className="form-control rounded-end-0 border-0 shadow py-3"
            placeholder="Search your products from here"
          />
          <button className="btn btn-success rounded-start-0 py-3 w-25 shadow">
            <SearchIcon />
            Search
          </button>
        </Box>
      </Box>
    </Box>
  );
};
export default HeroSection;

