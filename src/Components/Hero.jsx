import { Box, Typography } from "@mui/material";
import React from "react";
import bg from './berry.jpeg'; 
import logo from './logogo.jpeg'; 

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blurred Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(8px)", 
          zIndex: -1,
        }}
      />
      
      {/* Logo in the top-left corner */}
      <img
        src={logo}
        alt="Logo"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "100px", 
          height: "auto",
          zIndex: 1,
        }}
      />

      {/* Content Box */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
          borderRadius: "10px",
          zIndex: 1, // Make sure the content appears above the background
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#ffffff", // Change color to white for better contrast
          }}
          gutterBottom
        >
          Welcome to Threads and Beads
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "#ffffff" }}
        >
          Where creativity meets your needs!!!
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "#ffffff" }}
        >
          Why fear when we are here? Get your customized bags and keychains at a reasonable price 
          with no compromise in quality.
        </Typography>
      </Box>
    </Box>
  );
}
