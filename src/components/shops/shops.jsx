import React from "react";
import { Container, Grid } from "@mui/material";
import { Card, Typography, Avatar, Box } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import Logo from '../../asess/Logo-new.webp';
import {


    TextField,

    Button,
    Link,
} from "@mui/material";
import { Navigate } from "react-router-dom";

const handleNavigateHome = () => {
    Navigate('/');
};

const shopData = [
    {
        name: "Medicine",
        address: "East Avenue 1743, West Tower, New York, Manhattan, 12332, United States",
        iconColor: "#008080",
    },
    {
        name: "Gadget",
        address: "1740 Bedford Street, Alabama, Michigan, 35203, USA",
        iconColor: "#6A0DAD",
    },
    {
        name: "Books Shop",
        address: "44444, California, Zurich, 8021, Switzerland",
        iconColor: "#8A2BE2",
    },
    {
        name: "Grocery Shop",
        address: "1986 Spinnaker Lane, Illinois, Freeport, 61032, USA",
        iconColor: "#2E8B57",
    },
    {
        name: "Bakery Shop",
        address: "4422 Fort Street, Carolina, Rocky Mount, 27801, USA",
        iconColor: "#DAA520",
    },
    {
        name: "Makeup Shop",
        address: "2960 Rose Avenue, Louisiana, Metairie, 70001, USA",
        iconColor: "#CD853F",
    },
    {
        name: "Bags Shop",
        address: "1740 Bedford Street, Alabama, Michigan, 35203, USA",
        iconColor: "#FF8C00",
    },
    {
        name: "Clothing Shop",
        address: "4885 Spring Street, Illinois, Lincoln, 62656, USA",
        iconColor: "#FF4500",
    },
    {
        name: "Furniture Shop",
        address: "588 Finwood Road, New Jersey, East Dover, 08753, USA",
        iconColor: "#A52A2A",
    },
];

const ShopCards = () => {
    return (
        <Box sx={{ p: 6, minHeight: "100vh", bgcolor: "#f9fafb" ,  }}>

            <Container >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4, mt:10, }}>
                    All Shops
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {shopData.map((shop, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    borderRadius: "4px",
                                    p: 2,
                                    border: "1px solid #ddd", // Add border
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Avatar sx={{ bgcolor: shop.iconColor }}>{shop.name[0]}</Avatar>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                            {shop.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            sx={{ display: "flex", alignItems: "center", gap: 1 }}
                                        >
                                            <LocationOn fontSize="small" />
                                            {shop.address}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Box
                sx={{
                    backgroundColor: "#f9f9f9",
                    padding: "40px",
                    marginTop: "250px",
                    lineHeight: "3"
                }}
            >
                <Grid container spacing={4}>
                    {/* Left Section */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                            <img src={Logo} alt="PickBazar Logo" style={{ height: 40 }} />
                            <Typography
                                variant="h6"
                                component="div"
                                onClick={handleNavigateHome}
                                sx={{ fontWeight: 'bold', color: '#333', cursor: 'pointer' }}
                            >
                                PickBazar
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 3, }}>
                            <Typography variant="body2" color="textSecondary">
                                NY State Thruway, New York, USA
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 3, }}>
                            <Typography variant="body2" color="textSecondary">
                                demo@demo.com
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 3, }}>
                            <Typography variant="body2" color="textSecondary">
                                +129290122122
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 3, display: "flex", gap: "10px", mb: "20px" }}>
                            <Facebook fontSize="small" sx={{ color: "success.main" }} />
                            <Twitter fontSize="small" sx={{ color: "success.main" }} />
                            <Instagram fontSize="small" sx={{ color: "success.main" }} />
                        </Box>



                    </Grid>

                    {/* Explore Section */}
                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Explore
                        </Typography>
                        <Link href="#" color="textSecondary" underline="none" display="block">
                            Shops
                        </Link>
                        <Link href="#" color="textSecondary" underline="none" display="block">
                            Authors
                        </Link>
                        <Link href="#" color="textSecondary" underline="none" display="block">
                            Flash Deals
                        </Link>
                        <Link href="#" color="textSecondary" underline="none" display="block">
                            Coupon
                        </Link>
                    </Grid>

                    {/* Customer Service Section */}
                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Customer Service
                        </Typography>
                        <Link href="#" color="textSecondary" underline="none" display="block">
                            FAQ & Helps
                        </Link>
                        <Link href="#" color="textSecondary" underline="none" display="block">
                            Vendor Refund Policies
                        </Link>
                        <Link href="#" color="textSecondary" underline="none" display="block">
                            Customer Refund Policies
                        </Link>
                    </Grid>

                    {/* Our Information Section */}
                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Our Information
                        </Typography>
                        <Link href="#" color="textSecondary" underline="none" display="block">
                            Manufacturers
                        </Link>
                        <Link href="#" color="textSecondary" underline="none" display="block">
                            Privacy Policies
                        </Link>
                        <Link href="#" color="textSecondary" underline="none" display="block">
                            Terms & Conditions
                        </Link>
                        <Link href="#" color="textSecondary" underline="none" display="block">
                            Contact Us
                        </Link>
                    </Grid>

                    {/* Subscribe Section */}
                    <Grid item xs={12} md={3}>

                        <Typography variant="h6" gutterBottom>
                            Subscribe Now
                        </Typography>

                        <Box sx={{ my: 3, }}>
                            <Typography variant="body2" color="textSecondary">
                                Subscribe your email for newsletter and featured news based on your
                                interest
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 6, display: "flex", alignItems: "center" }}>
                            <TextField
                                placeholder="Write your email here"
                                variant="outlined"
                                size="small"
                                sx={{
                                    flexGrow: 1,
                                    "& .MuiOutlinedInput-root": {
                                        borderTopRightRadius: 0,
                                        borderBottomRightRadius: 0,
                                    },
                                }}
                            />
                            <Button
                                variant="contained"
                                color="success"
                                sx={{

                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                }}
                            >
                                &gt;
                            </Button>
                        </Box>

                    </Grid>
                </Grid>

                <Typography
                    variant="body2"
                    color="textSecondary"

                    sx={{ mt: 4 }}
                >
                    ©2025 PickBazar. Copyright © REDQ. All rights reserved worldwide. REDQ
                </Typography>
            </Box>

        </Box>

    );
};

export default ShopCards;
