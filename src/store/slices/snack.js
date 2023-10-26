import {
    createSlice
} from '@reduxjs/toolkit';

const snackSlice = createSlice({
    name: 'snack',
    initialState: {
        visible: false
    },
    reducers: {
        showSnack(state) {
            state.visible = true;
        },
        hideSnack(state) {
            state.visible = false;
        }
    }
});

export const {
    showSnack,
    hideSnack
} = snackSlice.actions;

export const snackReducer = snackSlice.reducer;