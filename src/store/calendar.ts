import { createSlice } from "@reduxjs/toolkit";
import { InitialCalendarState } from "../types/render-type";

const initialState: InitialCalendarState = [];

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    
  }
});

const calendarActions = calendarSlice.actions;
const calendarReducer = calendarSlice.reducer;

export { calendarActions, calendarReducer };