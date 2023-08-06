import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const baseURL = "https://exchange.akbolat.net/api";
export const api = axios.create({ baseURL });
export const noTokenApi = axios.create({ baseURL });

api.interceptors.request.use(
    request => {
        return { ...request, language: 'tr'};
    },
    error => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    error => {

        if(error.response.status === 401) {
            AsyncStorage.removeItem('jwt');
            api.defaults.headers.common['Authorization'] = null;
        }

        return Promise.reject(error)
    }
);

export const post = async (url, data = {}) => {
    try {
        const response = await api.post(url, data);

        return {
            success: true,
            data: response.data
        };
    }
    catch(error) {
        console.error('post-url:', url);

        return {
            success: false,
            data: error.response.data
        };
    }
}

export const get = async (url) => {
    try {
        const response = await api.get(url);

        return {
            success: true,
            data: response.data
        };
    }
    catch(error) {
        console.error('get-url:', url);

        return {
            success: false,
            data: error.response.data
        };
    }

}