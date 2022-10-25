import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    validated: true,
}

export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setValidated: (state, action) => {
            state.validated = action.payload;
        }
    }
})

export const {setUser, setValidated} = userSlice.actions

export default userSlice.reducer