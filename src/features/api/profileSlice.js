import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const url = "http://localhost:8000/getprofile";

export const getprofile = createAsyncThunk('item/getItem',
    async (token) => {
        const { data } = await axios({
            method: 'get',
            url: url,
            headers: { "Content-Type": "application/json",
                    Authorization: `Bearer ${token}` },
        })
        return data;
});


const initialState = {
    profile: [],
    isLoading: true,
}

const proSlice = createSlice({
    name: 'item',
    initialState,
    
    extraReducers: (builder) =>{
        builder.addCase(getprofile.pending, (state,action) => {
            state.isLoading = true;
        })
        builder.addCase(getprofile.fulfilled, (state,{ payload }) => {
            console.log(payload);
            state.isLoading = false;
            state.profile = payload;
        })
        builder.addCase(getprofile.rejected, (state,action) => {
            state.isLoading = true;
        })
    }
});

console.log(proSlice);

export default proSlice.reducer;