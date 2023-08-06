import AsyncStorage from "@react-native-async-storage/async-storage";
import { get, post, noTokenApi, api } from "./constans/conf/axios";

const apiURL = {
    exchange: "/exchanges",
    exchangeDetail: "/exchanges/",
}

const noTokenApiURL = {
    login: "/auth/local",
    register: "/auth/local/register"
}

const getExchange = async () => await get(apiURL.exchange);

const getExchangeDetail = async symbol => await get(apiURL.exchangeDetail + symbol);

const loginService = async (data) => {
    const response = await noTokenApi.post(noTokenApiURL.login, data);

    if(response.status === 200) {
        const jwt = response.data.jwt;
        api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

        AsyncStorage.setItem('jwt', jwt);
        AsyncStorage.setItem('user', JSON.stringify(response.data.user));

        return {
            status: true,
            user: response.data.user
        };
    }
    else {
        return { status: false, error: 'Hatalı kullanıcı adı veya şifre' };
    }

};

const registerService = async (data) => {
    const response = await noTokenApi.post(noTokenApiURL.register, data);

    if(response.status === 200) {
        const jwt = response.data.jwt;
        api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

        AsyncStorage.setItem('jwt', jwt);
        AsyncStorage.setItem('user', JSON.stringify(response.data.user));

        return response.data.user;
    }
    else {
        return 'Hatalı kullanıcı adı veya şifre';
    }
}

export { getExchange, getExchangeDetail, loginService, registerService };
