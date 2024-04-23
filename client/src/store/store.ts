import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../SliceContext/loginSlice";
import { userReducer } from "../SliceContext/userSlice";
import { playlistReducer } from "../SliceContext/playlistSlice";



export const store = configureStore({
    reducer:{
        login:loginReducer,
        user:userReducer,
        playlist:playlistReducer
    }
})

export type State = ReturnType<typeof store.getState>