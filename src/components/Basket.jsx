import { ShoppingBasket } from "@mui/icons-material";
import {
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

export default function Basket({
  order,
  removeFromOrder,
  cartOpen,
  closeCart,
}) {
  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: "400px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>Your cart is empty</ListItem>
        ) : (
          <>
            {order.map((item) => {
              return (
                <BasketItem
                  key={item.name}
                  {...item}
                  removeFromOrder={removeFromOrder}
                />
              );
            })}
            <Divider />
            <ListItem>
                <Typography sx={{fontWeight: 700}}>
                Total price:{' '}
                {order.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                }, 0)}{' '} rub.
                </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
}
