import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: {
       mail: null,
       idToken: null,
       
    } 
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value.mail = action.payload.mail
            state.value.idToken = action.payload.idToken
        },
        deleteUser: (state) => {
            state.value.mail = null
            state.value.idToken = null
        }
       
 
    } 
});

export const { setUser } = authSlice.actions; 

export default authSlice.reducer;  