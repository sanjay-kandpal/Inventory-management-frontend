import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


const url = "http://localhost:8000/getItems/";
export const getItems = createAsyncThunk('item/getItem',
    async (token) => {
        const { data } = await axios({
            method: 'get',
            url: url,
            headers: { "Content-Type": "application/json",
                    Authorization: `Bearer ${token}` },
        })
        return data
});

export const deleteItem = createAsyncThunk(
    'items/deleteItem',
    async (itemId) => {
        console.log('iomr');
        const token = localStorage.getItem('token');
      const response = await axios({
        method: 'DELETE',
        url: `http://localhost:8000/delItems/${itemId}`,
        headers:{
        Authorization: `${token}`}
      });
      return itemId;
    }
  );


const initialState = {
    items: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const apiSlice = createSlice({
    name: 'item',
    initialState,
    reducers:{},
    
    extraReducers: (builder) =>{
        builder.addCase(getItems.pending, (state,action) => {
            state.isLoading = true;
        })
        builder.addCase(getItems.fulfilled, (state,{ payload }) => {
            console.log(payload);
            state.isLoading = false;
            state.items = payload.item;
            state.total = payload.item.length;
        })
        builder.addCase(getItems.rejected, (state,action) => {
            state.isLoading = false;
        })
        builder.addCase(deleteItem.fulfilled, (state, action) => {
            const itemId = action.payload;
            console.log(itemId);
            state.items = state.items.filter((item) => item._id !== itemId);
            state.total = state.items.length;
            
         });
    }
});



console.log(apiSlice);

console.log(deleteItem);
export default apiSlice.reducer;




