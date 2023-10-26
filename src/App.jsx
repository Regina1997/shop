import "./App.css";
import Header from "./components/Header";
import Basket from "./components/basket/Basket";
import Snack from "./components/Snack";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import { hideCart, showCart } from "./store/slices/cart";
import { Routes, Route } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";

const App = () => {
  const dispatch = useDispatch();
  const { visible, totalCount } = useSelector((state) => state.cart);

  return (
    <ThemeProvider theme={theme}>
      <Header handleCart={() => dispatch(showCart())} orderLen={totalCount} />
      <Basket cartOpen={visible} closeCart={() => dispatch(hideCart())} />
      <Snack />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="page/:id" element={<ItemPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
