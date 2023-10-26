import { Box, CardMedia, Grid, SvgIcon, Typography } from "@mui/material";
import React from "react";
import poster from "../img/banner.png";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";

const animPosterMain = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function Poster() {
  return (
    <Box sx={{ pt: "10rem", mb: "8rem" }} >
      <Grid container >
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            square
            elevation={4}
            sx={{
              width: "149px",
              height: "204px",
              backgroundColor: "#9E98DC",
              position: "absolute",
              left: "75.5rem",
              top: "11.5rem",
              display: "flex",
              flexFlow: "wrap column",
              justifyContent: "end",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 700 }} >
              CHANGE <br />
              OLD BOOK <br />
              ON NEW
            </Typography>
            <svg
              width="57"
              height="14"
              viewBox="0 0 57 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 7H54" stroke="#1C2A39" stroke-width="2" />
              <path d="M48 1L55 7L48 13" stroke="#1C2A39" stroke-width="2" />
            </svg>
          </Paper>
          <Paper
          variants={"animPosterMain"}
            square
            elevation={4}
            sx={{
              width: "137px",
              height: "273px",
              backgroundColor: "#FF8FE6;",
              position: "absolute",
              right: "0",
              top: "28.5rem",
              display: "flex",
              flexFlow: "wrap column",
              justifyContent: "end",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
              TOP <br />
              100 <br />
              BOOKS <br />
              2023
            </Typography>
            <svg
              width="57"
              height="14"
              viewBox="0 0 57 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 7H54" stroke="#1C2A39" stroke-width="2" />
              <path d="M48 1L55 7L48 13" stroke="#1C2A39" stroke-width="2" />
            </svg>
          </Paper>
          <CardMedia
            image={poster}
            alt="Grapefruit slice atop a pile of other slices"
            style={{
              width: "1120px",
              height: "702px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
