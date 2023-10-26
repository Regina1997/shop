import React, { useEffect, useState } from "react";
import GoodsList from "../components/goods/GoodsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../store/slices/books";
import Poster from "../components/Poster";
import { Chip, Container, Divider } from "@mui/material";
import Sort from "../components/Sort";
import CheckOut from "../components/form/CheckOut";

export default function Home() {
  const { books } = useSelector((state) => state.books);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    if (books.items.length > 0) {
      setProducts(books.items);
    }
  }, [books.items]);

  return (
    <Container sx={{ mb: "1.5rem" }}>
      <Poster />
      <Divider sx={{ mb: "1rem" }}></Divider>
      <Sort books={products} />
      <GoodsList goods={products} />
      <CheckOut />
    </Container>
  );
}
