import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './features/api/apiSlice';
import proSlice from './features/api/profileSlice';

export const store = configureStore({
    reducer: {
        item: apiReducer ,
        profile: proSlice,
        
    },
 
});

export default store;