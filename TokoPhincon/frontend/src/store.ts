import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/Product.slice";
import authReducer from "./features/auth/Auth.slice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        auth: authReducer,
    },
});