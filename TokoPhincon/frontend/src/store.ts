import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/Product.slice";

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
});