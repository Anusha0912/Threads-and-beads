import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./logogo.jpeg"

const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        color: "#353543",
        py: 4,
        px: 2,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Website Title and Tagline */}
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "200px", color: "black" }}
            src={logo}
            alt="logo"
          />
          <Typography variant="body1" sx={{ mt: 1 }}>
            where creativity meets your needs!!!!
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "right" } }}
        >
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Box sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
            <Link
              to="/"
              style={{
                display: "block",
                marginBottom: "8px", 
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
                color: "#353543", 
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                display: "block",
                marginBottom: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
                color: "#353543",
              }}
            >
              About
            </Link>
            <Link
              to="/shop"
              style={{
                display: "block",
                marginBottom: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
                color: "#353543",
              }}
            >
              Shop
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{ mt: 4, textAlign: "center", color: "#aaa" }}
      >
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
