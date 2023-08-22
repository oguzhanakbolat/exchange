import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getExchange = createAsyncThunk(
    'exchange/getExchange',
    async () => {
        const res = await axios.get('https://www.tcmb.gov.tr/kurlar/today.xml');

        if(res.status !== 200) return {
            status: false,
            exchange: []
        }

        const xml = res.data;

        const newList = [];

        const list = xml.split('<Currency CrossOrder="');


        list.forEach((item, index) => {
            if(index > 0) {
                const symbol = item?.split('Kod="')[1]?.split('"')[0];
                const name = item?.split('<Isim>')[1]?.split('</Isim>')[0];
                const buying = item?.split('<ForexBuying>')[1]?.split('</ForexBuying>')[0];
                const sales = item?.split('<ForexSelling>')[1]?.split('</ForexSelling>')[0];;
                newList.push({
                    symbol, name, buying, sales: sales || 0
                })
            }
        })

        return {
            status: false,
            exchange: newList,
            eur: newList.find(item => item.symbol === 'EUR'),
            usd: newList.find(item => item.symbol === 'USD'),
        };
    }
);


export const exchangeSlice = createSlice({
    name: 'exchange',
    initialState: {
        loading: false,
        exchange: [],
        usd: null,
        eur: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getExchange.pending, (state) => {
            state.loading = true;
            state.exchange = [];
        });
        builder.addCase(getExchange.fulfilled, (state, action) => {
            state.loading = false,
            state.exchange = action.payload.exchange;
            state.usd = action.payload.usd;
            state.eur = action.payload.eur;            
        });
        builder.addCase(getExchange.rejected, (state) => {
            console.log('regjected')
            state.loading = false;
            state.exchange = [];
        });
    }
});

export default exchangeSlice.reducer;
