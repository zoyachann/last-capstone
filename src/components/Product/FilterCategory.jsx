import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppleIcon from "@mui/icons-material/Apple";
import FishIcon from "@mui/icons-material/SetMeal";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PetIcon from "@mui/icons-material/Pets";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
const categoryData = [
  {
    label: "Fruits & Vegetables",
    icon: <AppleIcon />,
    subcategories: ["Fresh Fruits", "Fresh Vegetables"],
  },
  {
    label: "Meat & Fish",
    icon: <FishIcon />,
    subcategories: ["Meat", "Fish"],
  },
  {
    label: "Snacks",
    icon: <FastfoodIcon />,
    subcategories: [
      "Nuts & Biscuits",
      "Chocolates",
      "Crisps",
      "Noodles & Pasta",
      "Sauce",
      "Soup",
    ],
  },
  {
    label: "Pet Care",
    icon: <PetIcon />,
    subcategories: ["Dog Food", "Cat Food", "Pet Accessories"],
  },
  {
    label: "Home & Cleaning",
    icon: <CleaningServicesIcon />,
    subcategories: ["Cleaning Tools", "Detergents"],
  },
  {
    label: "Dairy",
    icon: <BreakfastDiningIcon />,
    subcategories: ["Milk", "Cheese", "Yogurt"],
  },
  {
    label: "Cooking",
    icon: <OutdoorGrillIcon />,
    subcategories: ["Oil"," Rice", "Salt & Sugar","Spices"],
  },
  {
    label: "Breakfast",
    icon: <LunchDiningIcon/>,
    subcategories: ["Bread", "Cereal", "Jam"],
  },
  {
    label: "Beverage",
    icon: <LocalDrinkIcon />,
    subcategories: ["Soft Drinks", "Juices"],
  },
  {
    label: "Health & Beauty",
    icon: <HealthAndSafetyIcon />,
    subcategories: ["Skin Care", "Hair Care"],
  },
];

const FilterMenu = () => {
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box
      sx={{
        height:"800px",
     
        marginRight:"30px",
        width: "250px",
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <List>
        {categoryData.map((category, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleAccordionChange(index)}
            disableGutters
            sx={{ boxShadow: "none", "&:before": { display: "none" } }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0, margin: 0 }}
            >
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: "36px" }}>
                  {category.icon}
                </ListItemIcon>
                <ListItemText primary={category.label} />
              </ListItem>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingLeft: "36px" }}>
              <List disablePadding>
                {category.subcategories.map((subcategory, subIndex) => (
                  <ListItem key={subIndex} disablePadding>
                    <ListItemText primary={subcategory} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
    </Box>
  );
};

export default FilterMenu;
