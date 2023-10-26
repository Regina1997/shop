import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { addToOrder } from "../../store/slices/cart";
import { useDispatch } from "react-redux";
import { showSnack } from "../../store/slices/snack";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const variantButton = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

const GoodsItem = (props) => {
  const { name, price, poster, id, author } = props;
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: "100%", borderRadius: 0, boxShadow: 0 }}>
        <Link key={id} to={`/page/${id}`}>
          <CardMedia
            image={poster}
            alt={name}
            title={name}
            sx={{ height: 140 }}
          />
        </Link>
        <CardContent>
          {author && <Typography variant="body1">{author}</Typography>}
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">Цена: {price} руб.</Typography>
        </CardContent>
        <CardActions>
          <Button
            component={motion.button}
            variants={variantButton}
            whileHover="hover"
            variant="contained"
            sx={{ borderRadius: 0 }}
            onClick={() => {
              dispatch(addToOrder(props));
              dispatch(showSnack());
            }}
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
