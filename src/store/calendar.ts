import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialCalendarState } from "./data";
import { CalendarDetail } from "../types/render-type";

const initialState = initialCalendarState;

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCalendar(state, action: PayloadAction<CalendarDetail[]>) {
      state.schedules = action.payload;
    }
  }
});

const calendarActions = calendarSlice.actions;
const calendarReducer = calendarSlice.reducer;

export { calendarActions, calendarReducer };