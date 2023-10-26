import { ShoppingBasket } from "@mui/icons-material";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import BasketItem from "./BasketItem";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { variantButton } from "../goods/GoodsItem";
import { showCheckout } from "../../store/slices/checkout";

export default function Basket({ cartOpen, closeCart }) {
  const { order } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: "400px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>Ваша корзина пуста</ListItem>
        ) : (
          <>
            {order.map((item) => {
              return <BasketItem key={item.name} {...item} />;
            })}
            <Divider />
            <ListItem sx={{ mb: "1rem" }}>
              <Typography sx={{ fontWeight: 700 }}>
                Общая стоимость:{" "}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.count;
                }, 0)}{" "}
                руб.
              </Typography>
            </ListItem>
            <Button
              component={motion.button}
              variants={variantButton}
              whileHover="hover"
              variant="contained"
              sx={{ borderRadius: 0, ml: "1rem" }}
              onClick={() => {
                closeCart();
                dispatch(showCheckout());
              }}
            >
              Купить
            </Button>
          </>
        )}
      </List>
    </Drawer>
  );
}
