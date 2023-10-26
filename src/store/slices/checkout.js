import {
    createSlice
} from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: {
        visible: false
    },
    reducers: {
        showCheckout(state) {
            state.visible = true;
        },
        hideCheckout(state) {
            state.visible = false;
        }
    }
});

export const {
    showCheckout,
    hideCheckout
} = checkoutSlice.actions;

export const checkoutReducer = checkoutSlice.reducer;