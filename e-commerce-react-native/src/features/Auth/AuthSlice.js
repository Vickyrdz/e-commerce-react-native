import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: {
       mail: null,
       idToken: null,
       localId: null,
       
    } 
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value.mail = action.payload.mail
            state.value.idToken = action.payload.idToken
            state.value.localId = action.payload.localId
        },
        deleteUser: (state) => {
            state.value.mail = null
            state.value.idToken = null
            state.value.localId = null

        }
       
 
    } 
});

export const { setUser } = authSlice.actions; 

export default authSlice.reducer;  