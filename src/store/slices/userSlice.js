import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    userName: null,
    surname: null,
    role: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser(state, action) {
            state.email = action.payload.email;
            state.userName = action.payload.userName;
            state.surname = action.payload.surname;
            state.role = action.payload.role;
        },
        removeUser(state) {
            state.email = null;
            state.userName = null;
            state.surname = null;
            state.role = null;
        }
    },
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;