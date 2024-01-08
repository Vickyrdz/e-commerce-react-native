import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: {
       user: 'vickyRdz',
       items: [],
       total: null,
       updateAt: ""
    } 
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, actions) => {
            state.value.items.push({...actions.payload, quantity:1})
        },
        removeItem: () => {

        }
       

    } 
});

export const { addItem, removeItem} = cartSlice.actions; 

export default cartSlice.reducer;  