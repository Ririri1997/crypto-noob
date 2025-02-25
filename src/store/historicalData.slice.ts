import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URLS } from "@/utils/apiUrls";
import { HistoricalDataResponse, OHLCVData } from "@/interfaces/HistoricalOHLCVData.interfaces";

export const fetchDataHistory = createAsyncThunk<
  { coinSymbol: string; data: OHLCVData[] },
  string
>(
  "coins/fetchDataHistory",
  async (coinSymbol, { rejectWithValue }) => {
    try {
      const url = `${API_URLS.HISTORICAL}?fsym=${coinSymbol}&tsym=USD&limit=14`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result: HistoricalDataResponse = await response.json();
      if (!result.Data || !result.Data.Data || result.Data.Data.length === 0) {
        throw new Error("Нет данных");
      }
      return { coinSymbol, data: result.Data.Data };
    } catch (error) {
      return rejectWithValue({
        message: error instanceof Error ? error.message : "Неизвестная ошибка",
        coinSymbol, 
      });
    }
  }
);

type HistoricalData = {
  historicalData: Record<string, OHLCVData[]>;
  loading: boolean;
  error: { message: string; coinSymbol?: string } | null;
};

const initialState: HistoricalData = {
  historicalData: {},
  loading: false,
  error: null,
};

const historicalDataSlice = createSlice({
  name: "historicalData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataHistory.fulfilled, (state, action) => {
        state.historicalData[action.payload.coinSymbol] = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchDataHistory.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
         state.error = action.payload as { message: string; coinSymbol?: string };
       } else {
         state.error = { message: "Неизвестная ошибка" }; 
       }

      });
  },
});

export default historicalDataSlice.reducer;
