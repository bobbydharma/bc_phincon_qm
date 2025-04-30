
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductAPI from "../../services/api/product.api";
import { ProductType, ProductStateType, ProductFormType } from "../../types/product.type";

const imageUrlDefault =
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=400";

export const getAllProducts = createAsyncThunk("products/getAllProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await ProductAPI.getAll();
        return response;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const getProductById = createAsyncThunk("products/getProductById", async (id: number, { rejectWithValue }) => {
    try {
        const response = await ProductAPI.getById(id);
        return response;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const createProduct = createAsyncThunk("products/createProduct", async (productData: ProductFormType, { rejectWithValue }) => {
    try {
        const newProductData = {
            name: productData.name,
            price: productData.price,
            category: productData.category,
            image: productData.image?.trim() || imageUrlDefault,
            stock: productData.stock,
        };
        const response = await ProductAPI.create(newProductData);
        return response;
    } catch (error: any) {
        console.log(error);
        return rejectWithValue(error.response.data);
    }
});

export const updateProduct = createAsyncThunk("products/updateProduct", async (productData: ProductType, { rejectWithValue }) => {
    try {
        console.log(productData);
        const response = await ProductAPI.update(productData.id, productData);
        return response;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId: number, { rejectWithValue }) => {
    try {
        const response = await ProductAPI.delete(productId);
        console.log("deleteProduct",response);
        return response;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

const initialState: ProductStateType = {
    products: [],
    product: null,
    loading: false,
    error: null,
    message: null,
    status: null,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.status = "pending";
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data;
                state.message = action.payload.message;
                state.status = action.payload.status;
            })
            .addCase(getAllProducts.rejected, (state, action: any) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                console.log("fulfilled",action.payload);
                state.products.push(action.payload.data);
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                console.log("rejected",action.payload);
            })
            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.products.findIndex((product) => product.id === action.payload.data.id);
                if (index !== -1) {
                    state.products[index] = action.payload.data;
                }
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter((product) => product.id !== action.payload.data);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default productSlice.reducer;
