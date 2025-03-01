import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import mylala from './berry.jpeg'

const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: 'paleturquoise',
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Threads and beads
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
              <h6>Where creativity meets your needs!!!!!</h6>
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Image) */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <img src={mylala} alt="Creative Design" style={{ Width: "600px", height: "400px" }} />
        </Grid>
      </Grid>
    </Box>
  );
};


export default Banner;
