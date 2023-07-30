import axios from "axios";

const getExchange = async () => {
    const response = await axios.get("https://exchange.akbolat.net/api/exchanges");

    if(response.status === 200) {
        return response.data;
    }
    else {
        return [];
    }
};

export { getExchange };