import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer: {
        login: (state, action) => {
            state.status = true,
            state.userData=action.payload.userData
        },
        logout: (state) => {
            state.status = false,
            state.userDate=null
        },
    }
})

export const { login,logout}=authSlice.actions;  

export default authSlice.reducer;   