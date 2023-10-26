import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import React from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToOrder } from "../store/slices/cart";
import { showSnack } from "../store/slices/snack";

export const Page = ({ id, name, price, description, poster, author }) => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ pt: "8rem" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          sx={{ display: "flex", justifyContent: "right", pr: "1rem" }}
        >
          <CardMedia
            image={poster}
            alt={name}
            title={name}
            sx={{ width: 300, height: 440 }}
          />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <CardContent>
            <Typography variant="h6">{author && author}</Typography>
            <Typography variant="h4" sx={{ mb: "15px" }}>
              {name}
            </Typography>
            <Typography variant="body1" sx={{ mb: "15px" }}>
              {description}
            </Typography>
            <Typography variant="h6">Цена: {price} руб.</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(addToOrder({id, name, price, description, poster, author }));
                dispatch(showSnack());
              }}
              sx={{ width: 176 }}
            >
              Купить
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Box>
  );
};
