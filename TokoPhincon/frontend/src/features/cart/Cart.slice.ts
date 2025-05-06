/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductAPI from "../../services/api/product.api";
import { ProductType } from "../../types/product.type";
import { CartFormType, CartStateType } from "../../types/cart.type";
import cartApi from "../../services/api/cart.api";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ProductAPI.getAll();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await ProductAPI.getById(id);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createCart = createAsyncThunk(
  "cart/createCart",
  async (cartData: CartFormType, { rejectWithValue }) => {
    try {
      const newCartData = {
        productId: cartData.productId,
        qty: cartData.qty,
        totalPrice: cartData.totalPrice,
      };
      const response = await cartApi.create(newCartData);
      return response;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (productData: ProductType, { rejectWithValue }) => {
    try {
      console.log(productData);
      const response = await ProductAPI.update(productData.id, productData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId: string, { rejectWithValue }) => {
    try {
      const response = await ProductAPI.delete(productId);
      console.log("deleteProduct", response);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialCartState: CartStateType = {
  carts: [],
  cart: null,
  loading: false,
  error: null,
  message: null,
  status: null,
};

const cartSlice = createSlice({
  name: "products",
  initialState: initialCartState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload.data;
        console.log("fulfilled", action.payload);
      })
      .addCase(createCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("rejected", action.payload);
      });
  },
});

export default cartSlice.reducer;
