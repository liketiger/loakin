import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialCalendarState } from "./data";
import { CalendarDetail } from "../types/render-type";
import { AddCrewPayloadTypes, NewRaidPayloadTypes, RemoveCrewPayloadTypes, RemoveRaidPayloadTypes, UpdateRaidPayloadTypes } from "../types/fetch-types";

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
      state.schedules.find(schedule => schedule._id === id)!.raid.push(newRaid);
    },

    removeRaid(state, action: PayloadAction<RemoveRaidPayloadTypes>) {
      const { scheduleId, raidId } = action.payload;
      const raidArr = state.schedules.find(schedule => schedule._id === scheduleId)!.raid!;
      const raidIdx = raidArr.findIndex(item => item._id === raidId);
      raidArr.splice(raidIdx, 1);
    },

    updateRaid(state, action: PayloadAction<UpdateRaidPayloadTypes>) {
      const { data, scheduleId, raidId } = action.payload;
      const raidArr = state.schedules.find(schedule => schedule._id === scheduleId)!.raid!;
      const raidIdx = raidArr.findIndex(item => item._id === raidId);
      raidArr[raidIdx] = data;
    },
    
    addCrew(state, action: PayloadAction<AddCrewPayloadTypes>) {
      const { data, scheduleId, raidId } = action.payload;
      const raidArr = state.schedules.find(schedule => schedule._id === scheduleId)!.raid!;
      const raid = raidArr.find(item => item._id === raidId);
      raid?.characterList.push(data);
    },
    
    removeCrew(state, action: PayloadAction<RemoveCrewPayloadTypes>) {
      const { scheduleId, raidId, crewId } = action.payload;
      const raidArr = state.schedules.find(schedule => schedule._id === scheduleId)!.raid!;
      const raid = raidArr.find(item => item._id === raidId);
      raid!.characterList = raid!.characterList.filter(character => character._id !== crewId);
    },
  }
});

const calendarActions = calendarSlice.actions;
const calendarReducer = calendarSlice.reducer;

export { calendarActions, calendarReducer };