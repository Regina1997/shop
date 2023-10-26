import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookById } from "../store/slices/books";
import { Link, useParams } from "react-router-dom";
import { Container, IconButton } from "@mui/material";
import { Page } from "../components/Page";

export default function ItemPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.books);
  const [book, setBook] = useState([]);

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, []);

  useEffect(() => {
    if (item.book.length !== 0) {
      setBook(item.book[0]);
    }
  }, [item.book]);

  return (
    <Container sx={{ mb: "2rem", width: '80%', pr: '2rem', pl: '2rem' }}>
      <Page {...book} />
    </Container>
  );
}
