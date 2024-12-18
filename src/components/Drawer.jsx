// import React from 'react';

// const ProductModal = ({ product, onClose }) => {
//   if (!product) return null;

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>{product.title}</h2>
//         <img src={product.image} alt={product.title} />
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;

import React, { useState } from "react";
import Box from '@mui/material/Box';
import "bootstrap/dist/css/bootstrap.min.css";

const FilterDrawer = () => {
  const [openCategories, setOpenCategories] = useState({
    fruitsVegetables: true,
    meatFish: false,
    snacks: false,
    petCare: false,
    homeCleaning: false,
    dairy: false,
    cooking: false,
  });

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <Box
      className="bg-white border-end vh-100 p-4 position-fixed"
      style={{ width: "300px", overflowY: "auto" }}
    >
      {/* Sidebar Header */}
      <Box className="mb-4">
        <h3 className="fw-bold">PickBazar</h3>
      </Box>

      {/* Fruits & Vegetables */}
      <Box>
        <Box
          className="fw-semibold text-success mb-2"
          onClick={() => toggleCategory("fruitsVegetables")}
          style={{ cursor: "pointer" }}
        >
          🍎 Fruits & Vegetables
        </Box>
        {openCategories.fruitsVegetables && (
          <Box className="ps-3">
            <Box className="mb-1">Fruits</Box>
            <Box>Vegetables</Box>
          </Box>
        )}
      </Box>

      {/* Meat & Fish */}
      <Box>
        <Box
          className="fw-semibold text-success mb-2"
          onClick={() => toggleCategory("meatFish")}
          style={{ cursor: "pointer" }}
        >
          🍖 Meat & Fish
        </Box>
        {openCategories.meatFish && (
          <Box className="ps-3">
            <Box className="mb-1">Meat</Box>
            <Box>Fish</Box>
          </Box>
        )}
      </Box>

      {/* Snacks */}
      <Box>
        <Box
          className="fw-semibold text-success mb-2"
          onClick={() => toggleCategory("snacks")}
          style={{ cursor: "pointer" }}
        >
          ☕ Snacks
        </Box>
        {openCategories.snacks && (
          <Box className="ps-3">
            <Box className="mb-1">Chips</Box>
            <Box>Biscuits</Box>
          </Box>
        )}
      </Box>

      {/* Pet Care */}
      <Box>
        <Box
          className="fw-semibold text-success mb-2"
          onClick={() => toggleCategory("petCare")}
          style={{ cursor: "pointer" }}
        >
          🐾 Pet Care
        </Box>
        {openCategories.petCare && (
          <Box className="ps-3">
            <Box className="mb-1">Food</Box>
            <Box>Toys</Box>
          </Box>
        )}
      </Box>

      {/* Home & Cleaning */}
      <Box>
        <Box
          className="fw-semibold text-success mb-2"
          onClick={() => toggleCategory("homeCleaning")}
          style={{ cursor: "pointer" }}
        >
          🧴 Home & Cleaning
        </Box>
        {openCategories.homeCleaning && (
          <Box className="ps-3">
            <Box className="mb-1">Cleaners</Box>
            <Box>Tools</Box>
          </Box>
        )}
      </Box>

      {/* Dairy */}
      <Box>
        <Box
          className="fw-semibold text-success mb-2"
          onClick={() => toggleCategory("dairy")}
          style={{ cursor: "pointer" }}
        >
          🥛 Dairy
        </Box>
        {openCategories.dairy && (
          <Box className="ps-3">
            <Box className="mb-1">Milk</Box>
            <Box>Cheese</Box>
          </Box>
        )}
      </Box>

      {/* Cooking */}
      <Box>
        <Box
          className="fw-semibold text-success mb-2"
          onClick={() => toggleCategory("cooking")}
          style={{ cursor: "pointer" }}
        >
          🍳 Cooking
        </Box>
        {openCategories.cooking && (
          <Box className="ps-3">
            <Box className="mb-1">Oil</Box>
            <Box>Spices</Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FilterDrawer;
