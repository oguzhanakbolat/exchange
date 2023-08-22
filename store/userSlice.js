import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../constans/conf/axios';

export const authControl = createAsyncThunk(
    'user/authControl',
    async () => {
        const token = await AsyncStorage.getItem('jwt');
        const user = await AsyncStorage.getItem('user');
    
        if(token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return {
                userInfo: JSON.parse(user),
                status: true
            }
        }
        else {
            return {
                userInfo: null,
                status: false
            }
        }
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isAuth: null,
        loading: true,
        fcmToken: null,
    },

    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.isAuth = action.payload.status;
        },
        setFCMToken: (state, action) => {
            state.fcmToken = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(authControl.pending, (state) => {
            //başlama ve bekleme
            state.loading = true;
        });

        builder.addCase(authControl.fulfilled, (state, action) => {
            // işlem olumlu olduysa 
            state.user = action.payload.userInfo;
            state.isAuth = action.payload.status;
            state.loading = false;
        });

        builder.addCase(authControl.rejected, (state) => {
            // işlem olumsuz olduysa
            state.loading = false;
            state.isAuth = false;
            state.user = null;
        });

    }
});

export default userSlice.reducer;
export const { login, setFCMToken } = userSlice.actions;
