import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import myimage from './h.jpeg'
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor:'paleturquoise', borderRadius: "20px" }}
        
      >
        <Grid2 size={{ xs:12,sm:6}}>
          <img
            src={myimage}
            alt="picture"
            style={{ width: "250px", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
             where creativity meets your needs!!!!
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              We customise your bags and keychains based on your needs
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
             match your bags as well along with the accesories and look even more beautiful
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}