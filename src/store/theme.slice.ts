import { createSlice } from "@reduxjs/toolkit";
import {  saveState } from "./storage";

export const THEME_PERSISTENT_STATE = 'theme'

type ThemeState = {
 mode: 'light' | 'dark';
}

const initialState: ThemeState ={
 mode: 'dark'
}

const themeSlice = createSlice({
 name: 'theme',
 initialState,
  reducers: {
   toggleTheme: (state) => {
     state.mode = state.mode === 'dark' ? 'light' : 'dark'
     if (typeof window !== "undefined") {
      saveState(state.mode, THEME_PERSISTENT_STATE);
     }
   },
   setTheme: (state, action) => {
    state.mode = action.payload
    if (typeof window !== "undefined") {
     saveState(state.mode, THEME_PERSISTENT_STATE);
    }
   }
  }
})

export const {toggleTheme, setTheme} = themeSlice.actions;
export default themeSlice.reducer;