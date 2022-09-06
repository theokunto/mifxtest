import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token: "",
    userName: ""
}
export const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.token = `bearer ${action.payload.token}`
            state.userName = action.payload.userName
        },
        setLogout: (state, action) => {
            state.token = ""
            state.userName = ""
        }
    }
})
export const { setLogin, setLogout, } = authSlice.actions
export default authSlice.reducer