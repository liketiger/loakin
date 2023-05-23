import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialCalendarState } from "./data";
import { CalendarDetail, RaidDetail } from "../types/render-type";
import { NewRaidPayloadTypes } from "../types/fetch-types";
import Schedule from "../models";

const initialState = initialCalendarState;

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCalendar(state, action: PayloadAction<CalendarDetail[]>) {
      state.schedules = action.payload;
    },

    addCalendar(state, action: PayloadAction<CalendarDetail>) {
      state.schedules.push(action.payload);
    },
    
    addRaid(state, action: PayloadAction<NewRaidPayloadTypes>) {
      const { id, newRaid } = action.payload;
      state.schedules.find(schedule => schedule._id === id)?.raid.push(newRaid);
    }
  }
});

const calendarActions = calendarSlice.actions;
const calendarReducer = calendarSlice.reducer;

export { calendarActions, calendarReducer };