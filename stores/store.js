import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loader";
import userReducer from './user';

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
        userInfo: userReducer,
    }
})