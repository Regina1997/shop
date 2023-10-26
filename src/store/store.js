import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './slices/books';
import { cartReducer } from './slices/cart'
import { snackReducer } from './slices/snack';
import { checkoutReducer } from './slices/checkout'

const store = configureStore({
    reducer: {
        books: booksReducer,
        cart: cartReducer,
        snack: snackReducer,
        checkout: checkoutReducer
    }
})

export default store

