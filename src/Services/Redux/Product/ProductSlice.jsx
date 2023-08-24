import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: '',
    loading: false,
};

const productSlice = createSlice({
    name: 'product',
    initialState: { ...initialState },
    reducers: {
        onDataLoad(state, action) {
            state.data = action.payload.data;
        },
        onLoading(state, action) {
            state.loading = action.payload.data;
        }
    },
});

export const productActions = productSlice.actions;

export default productSlice;
