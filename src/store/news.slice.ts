import { NewsItem} from "@/interfaces/news.interfaces";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = process.env.NEXT_PUBLIC_CRYPTOCOMPARE_API_KEY;

export const fetchNews = createAsyncThunk<NewsItem[], void, { rejectValue: string }>(
 "news/fetchNews",
 async (_, { rejectWithValue }) => {
  try {
   const baseUrl = "https://min-api.cryptocompare.com/data/v2/news/";
   const params = { lang: "EN" };
   const url = new URL(baseUrl);
   url.search = new URLSearchParams(params).toString();

   const options = {
    method: "GET",
    headers: {
     "Content-type": "application/json; charset=UTF-8",
     authorization: `Apikey ${apiKey}`,
    },
   };

   const response = await fetch(url, options);

   if (!response.ok) {
    throw new Error(`Ошибка сети: ${response.status}`);
   }

   const data = await response.json();

   return data.Data; 
  } catch (error) {
   return rejectWithValue(error instanceof Error ? error.message : "Неизвестная ошибка");
  }
 }
);

type NewsState = {
 news: NewsItem[] | null;
 loading: boolean;
 error: string | null;
};

const initialState: NewsState = {
 news: [],
 loading: false,
 error: null,
};

const newsSlice = createSlice({
 name: "news",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(fetchNews.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(fetchNews.fulfilled, (state, action) => {
    state.news = action.payload;
    state.loading = false;
   })
   .addCase(fetchNews.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload || "Неизвестная ошибка"; 
   });
 },
});

export default newsSlice.reducer;
