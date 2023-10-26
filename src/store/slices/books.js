import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
//import { Axios } from 'axios'


export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const { data } = await axios.get('/books');  
  return data;
});

export const fetchBookById = createAsyncThunk('books/fetchBookById', async (id) => {
  const { data } = await axios.get(`/books?id=${id}`);  
  return data;
});

export const fetchBooksBySearch = createAsyncThunk('books/fetchBooksBySearch', async (str) => {
  const { data } = await axios.get(`/books?q=${str}`);
  return data;
});

export const fetchItemsByCategory = createAsyncThunk('books/fetchItemsByCategory', async (category) => {
  const { data } = await axios.get(`/books?category=${category}`);
  return data;
});

/*export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async (id) =>
  axios.delete(`/posts/${id}`),
);

export const fetchAddComments = createAsyncThunk('posts/fetchAddComments', async ({ id, text }) => {
  try {
    const response = await axios.patch(`/comment/${id}`, {
      comment: text,
    });
    return response.data; // Assuming the API returns the updated comment data
  } catch (error) {
    throw new Error('Failed to add comment'); // You can handle errors as needed
  }
});*/


const initialState = {
  books: {
    items: [],
    status: 'loading',
  },
  item: {
    book: [],
    status: 'loading',
  },
  /*filtered: {
    items: [],
    status: 'loading',
  },
  data : {
    items: [],
    status: 'loading',
  }*/
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
   /* setData: (state, action) => {
      state.data.items = action.payload; 
      state.data.status = 'loaded'
    },*/
  },
  extraReducers(builder) {
    builder
    .addCase(fetchBooks.pending, (state) => {
      state.books.items = [];
      state.books.status = 'loading';
    })
    .addCase(fetchBooks.fulfilled, (state, action) => {
      state.books.items = action.payload;
      state.books.status = 'loaded';
    })
    .addCase(fetchBooks.rejected, (state) => {
      state.books.items = [];
      state.books.status = 'error';
    })
    .addCase(fetchBookById.pending, (state) => {
      state.item.book = []
      state.item.status = 'loading';
    })
    .addCase(fetchBookById.fulfilled, (state, action) => {
      state.item.book = action.payload;
      state.item.status = 'loaded';
    })
    .addCase(fetchBookById.rejected, (state) => {
      state.item.book = []
      state.item.status = 'error';
    })
    .addCase(fetchBooksBySearch.pending, (state) => {
      state.books.items = [];
      state.books.status = 'loading';
    })
    .addCase(fetchBooksBySearch.fulfilled, (state, action) => {
      state.books.items = action.payload;
      state.books.status = 'loaded';
    })
    .addCase(fetchBooksBySearch.rejected, (state) => {
      state.books.items = [];
      state.books.status = 'error';
    })
    .addCase(fetchItemsByCategory.pending, (state) => {
      state.books.items = [];
      state.books.status = 'loading'
    })
    .addCase(fetchItemsByCategory.fulfilled, (state, action) => {
      state.books.items = action.payload;
      state.books.status = 'loaded';
    })
    .addCase(fetchItemsByCategory.rejected, (state) => {
      state.books.items = [];
      state.books.status = 'error';
    })
  },
});

//export const { setData } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;

