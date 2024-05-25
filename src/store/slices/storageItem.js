import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { sendRequest } from '../../helpers/sendRequest.js'
import { API } from "../../constants/const.js";

const initialState = {
    storeItems: [],
}

export const fetchItemCards = createAsyncThunk(
    'items/fetchItems',
    async () => {
        const data = await sendRequest(`${API}`);
        return data;
    }
)

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        itemSliderCards: (state, { payload }) => {
            state.storeItems = [...payload];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItemCards.fulfilled, (state, { payload }) => {
            state.storeItems = [...payload];
        })
    }
})

export const { itemSliderCards } = itemSlice.actions
export default itemSlice.reducer