import { createSlice } from "@reduxjs/toolkit";
import { initialCalendarState } from "./data";

const initialState = initialCalendarState;

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    
  }
});

const calendarActions = calendarSlice.actions;
const calendarReducer = calendarSlice.reducer;

export { calendarActions, calendarReducer };