import {
    createSlice
} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        visible: false,
        order: [],
        totalCount: 0
    },
    reducers: {
        showCart(state) {
            state.visible = true;
        },
        hideCart(state) {
            state.visible = false;
        },
        addToOrder(state, action) {
            const findItem = state.order.find((item) => item.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.order.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalCount++;
        },
        removeFromOrder(state, action) {
            state.order = state.order.filter((item) => item.id !== action.payload)
            state.totalCount = state.order.length;
        }
    }
});

export const {
    showCart,
    hideCart,
    addToOrder,
    removeFromOrder
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;