import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebaseConfig";

export const signUp = createAsyncThunk("signUp", async (_, rejectWithValue) => {

    try {
        //todo : set Logic for signUp
    } catch (error) {

    }
})

export const logIn = createAsyncThunk("signUp", async (_, rejectWithValue) => {

    try {
        //todo : set Logic for logIn

    } catch (error) {

    }
})

export const logOut = createAsyncThunk("signUp", async (_, rejectWithValue) => {

    try {
        //todo : set Logic for logOut

    } catch (error) {

    }
})
const authSlice = createSlice({
    name: "auth",
    initialState: { user: [] },
    reducers: {},
    extraReducers: {}
})

export default authSlice.reducer;