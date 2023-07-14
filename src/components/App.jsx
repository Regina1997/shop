import { useState } from "react";
import GoodsList from "./GoodsList";
import Search from "./Search";

import { goods } from "../data/goods";
import Header from "./Header";
import { Container } from "@mui/material";
import Basket from "./Basket";
import Snack from "./Snack";

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(goods);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch("");
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }

    setSnackOpen(true)
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  return (
    <>
      <Header handleCart={() => setCartOpen(true)} orderLen={order.length}/>
      <Container sx={{ mb: "1.5rem" }}>
        <Search value={search} onChange={handleChange} />
        <GoodsList goods={products} setOrder={addToOrder} />
      </Container>
      <Basket cartOpen={isCartOpen} closeCart={() => setCartOpen(false)} order={order} removeFromOrder={removeFromOrder}/>
      <Snack isOpen={isSnackOpen} handleClose={() => setSnackOpen(false)}/>
    </>
  );
};

export default App;
