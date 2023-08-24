import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Product/ProductSlice";
import userSlice from "./User/UserSlice";

export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        user: userSlice.reducer,
    },
})