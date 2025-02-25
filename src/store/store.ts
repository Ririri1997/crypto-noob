import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './theme.slice';
import topCoinsReducer from './topCoins.slice';
import historicalDataReducer from './historicalData.slice'

export const store = configureStore({
 reducer: {
  theme: themeReducer,
  topCoins: topCoinsReducer, 
  historicalData: historicalDataReducer,
 }
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;