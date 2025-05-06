/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi from "../../services/api/auth.api";
import { AuthStateType } from "../../types/auth.type";
import Cookies from "js-cookie";

const login = createAsyncThunk<AuthStateType, { username: string; password: string }, { rejectValue: string }>(
    "auth/login",
    async (data, { rejectWithValue }): Promise<any> => {
        try {
            const response = await AuthApi.login(data);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState: AuthStateType = {
    login: {
        username: "",
        password: "",
    },
    user: null,
    loading: false,
    error: null,
    token: Cookies.get("token") ?? null,
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default auth.reducer;
export { login };
export const { setError, setToken } = auth.actions;