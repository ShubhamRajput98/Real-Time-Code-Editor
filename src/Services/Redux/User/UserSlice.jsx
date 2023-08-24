import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    token:'',
    loading:false,
    signupData:'',
}

const userSlice = createSlice({
    name:"user",
    initialState:{...initialState},
    reducers:{
        onLogin(state,action){
            state.token = action.payload.data;
        },
        onSignup(state,action){
            state.signupData = action.payload.data;
        },
        onLoading(state,action){
            state.loading = action.payload.data;
        },
    }
});

export const userAction = userSlice.actions

export default userSlice;