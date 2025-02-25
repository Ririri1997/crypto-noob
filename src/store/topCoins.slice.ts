import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URLS } from '@/utils/apiUrls';
import { TopCurrencyData } from "@/interfaces/topCoins.interfaces";

export const fetchTopCoins = createAsyncThunk('coins/fetchTopCoins', async () => {
  const response = await fetch(API_URLS.TOP);
  const result = await response.json();
  return result.Data;
});

type TopCoins = {
 topCoins: TopCurrencyData[],
 loading: boolean,
 error: null | string ,
}

const initialState: TopCoins ={
 topCoins: [],
 loading: false,
 error: null,
}


const topCoinsSlice = createSlice({
  name: 'topCoins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTopCoins.fulfilled, (state, action) => {
        state.topCoins = action.payload;
        state.loading = false;
      })
      .addCase(fetchTopCoins.rejected, (state, action) => {
       state.error = action.error.message || null; 
      });
  },
});

export default topCoinsSlice.reducer;
