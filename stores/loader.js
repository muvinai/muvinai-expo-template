import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    load: false
}

export const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.load = action.payload;
        }
    }
})

export const {setLoader} = loaderSlice.actions

export default loaderSlice.reducer