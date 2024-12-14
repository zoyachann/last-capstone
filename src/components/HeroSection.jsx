import React from "react";
import heroImage from "../asess/grocery.webp"; 
const HeroSection = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
      ></div>
      <div className="position-relative z-3 justify-content-center">
        <h1 className="display-5 fw-bold text-black">Groceries Delivered in 90 Minutes</h1>
        <p className="lead text-black">
          Get your healthy foods & snacks delivered at your doorsteps all day every day
        </p>
        <div className="d-flex justify-content-center align-items-center my-4 w-100 border border-0">
          <input
            type="text"
            className="form-control  rounded-end-0 border-0 shadow py-3"
            placeholder="Search your products from here"           
          />
          <button className="btn btn-success rounded-start-0 py-3 w-25">Search</button>
        </div>
        {/* Items and Price
        <div className="d-flex justify-content-center gap-4 mt-3">
          <span className="badge bg-secondary">0 Item</span>
          <span className="badge bg-primary">$0.00</span>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
