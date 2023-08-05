import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebaseConfig";

export const signUp = createAsyncThunk("signUp", async (datas, rejectWithValue) => {
    const { email, password } = datas;
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        console.log("in redux store ====>", userCredential);
        return userCredential;
    } catch (error) {
        console.log("error ", error);
        return rejectWithValue({ error: "Signup failed" })
    }
})

export const logIn = createAsyncThunk("logIn", async (_, rejectWithValue) => {

    try {
        //todo : set Logic for logIn

    } catch (error) {

    }
})

export const logOut = createAsyncThunk("logOut", async (_, rejectWithValue) => {

    try {
        //todo : set Logic for logOut

    } catch (error) {

    }
})
const authSlice = createSlice({
    name: "auth",
    initialState: { user: [] },
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default authSlice.reducer;