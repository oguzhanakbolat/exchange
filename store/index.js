import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import exchangeReducer from './exchangeSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        exchange: exchangeReducer,
    },
});