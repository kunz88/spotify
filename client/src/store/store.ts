import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../SliceContext/loginSlice";
import { userReducer } from "../SliceContext/userSlice";



export const store = configureStore({
    reducer:{
        login:loginReducer,
        user:userReducer
    }
})

export type State = ReturnType<typeof store.getState>