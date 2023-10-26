import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";
import { removeFromOrder } from "../../store/slices/cart";
import { useDispatch, useSelector } from "react-redux";

const BasketItem = ({ name, price, count, id }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price}руб x{count}
      </Typography>
      <IconButton
        className="btn btn-primary"
        onClick={() => dispatch(removeFromOrder(id))}
      >
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
