import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Grid,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const storedPassword = localStorage.getItem("password") || "defaultPassword";

  const handleSubmit = () => {
    if (oldPassword !== storedPassword) {
      alert("Old password is incorrect!");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    localStorage.setItem("password", newPassword);
    alert("Password updated successfully!");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            padding: 3,
            backgroundColor: "#f9f9f9",
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: 3,
              borderRadius: 2,
              marginBottom: 3,
              py: 10,
              boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Wallet Points
            </Typography>
            <Divider sx={{ marginY: 2 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ flex: 1, textAlign: "center" }}>
                <Typography variant="h5">0</Typography>
                <Typography variant="body2" color="textSecondary">
                  Total
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
              <Box sx={{ flex: 1, textAlign: "center" }}>
                <Typography variant="h5">0</Typography>
                <Typography variant="body2" color="textSecondary">
                  Used
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
              <Box sx={{ flex: 1, textAlign: "center" }}>
                <Typography variant="h5">0</Typography>
                <Typography variant="body2" color="textSecondary">
                  Available
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        
      </Grid>

      <Grid item xs={12} md={9}>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: 3,
            borderRadius: 2,
            boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: 500,
            margin: "auto",
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2 }}>
            Change Password
          </Typography>
          <TextField
            label="Old Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="New Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChangePassword;
