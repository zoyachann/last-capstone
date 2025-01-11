import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Link,
} from "@mui/material";


import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import contact from '../../asess/contact-illustration.2f6adc05.svg';
import Logo from '../../asess/Logo-new.webp';
const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, email, subject, description } = formData;

    if (name && email && subject && description) {
      localStorage.setItem("contactFormData", JSON.stringify(formData));
      navigate("/");
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };
  const handleNavigateHome = () => {
    navigate('/');
  };
  return (
    <Box sx={{ p: 6, minHeight: "100vh", bgcolor: "#f9fafb" }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={10}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              bgcolor: "#fff",
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",

            }}
          >
            {/* Left Section */}
            <Box
            sx={{
              flex: 1,
              p: 4,
              display: "flex",
              flexDirection: "column",

              borderRight: { md: "1px solid #e0e0e0" },
              bgcolor: "#f9fafb",
            }}>
              <img
                src={contact}
                alt="Contact Illustration"
                style={{ fullWidth: "100%", maxWidth: 500, marginBottom: 40 }}
              />

              <Box
                
              >

                <Typography variant="h6" sx={{ mb: 1 }}>
                  Address
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  NY State Thruway, New York, USA
                </Typography>

                <Typography variant="h6" sx={{ mb: 1 }}>
                  Phone
                </Typography>
                <Typography sx={{ mb: 2 }}>+1 292-901-22122</Typography>

                <Typography variant="h6" sx={{ mb: 1 }}>
                  Email Address
                </Typography>
                <Typography sx={{ mb: 2 }}>demo@demo.com</Typography>

                <Typography variant="h6" sx={{ mb: 1 }}>
                  Website
                </Typography>
                <Link href="https://redq.io" target="_blank" sx={{ mb: 2 }}>
                  https://redq.io
                </Link>

                <Typography variant="h6" sx={{ mb: 1 }}>
                  Follow Us
                </Typography>
                <Box sx={{ mt: 3, display: "flex", gap: "10px", mb: "20px" }}>
                  <Facebook fontSize="small" sx={{ color: "success.main" }} />
                  <Twitter fontSize="small" sx={{ color: "success.main" }} />
                  <Instagram fontSize="small" sx={{ color: "success.main" }} />
                </Box>

              </Box>
            </Box>
            {/* Right Section */}
            <Box sx={{ flex: 2, p: 8, mt: 10, }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                How can we improve your experience?
              </Typography>
              <Grid container spacing={2} sx={{ mt: 5,}}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Subject"
                    name="subject"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    name="description"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="success"

                    sx={{ textTransform: "none", fontWeight: "bold" }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>


        </Grid>
      </Grid>

      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          padding: "40px",
          marginTop: "80px",
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

export default ContactPage;
