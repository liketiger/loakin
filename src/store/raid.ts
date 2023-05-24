import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialRaidState } from "./data";
import { CharacterDetail } from "../types/fetch-types";

const initialState = initialRaidState;

const raidSlice = createSlice({
  name: 'raid',
  initialState,
  reducers: {
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },

    setCharacterList(state, action: PayloadAction<CharacterDetail[]>) {
      state.characterList = action.payload;
    },

    setCurrentRaidId(state, action: PayloadAction<string>) {
      state.raidId = action.payload;
    },

    setCurrentScheduleId(state, action: PayloadAction<string>) {
      state.scheduleId = action.payload;
    },

    addCharacter(state, action: PayloadAction<CharacterDetail>) {
      state.characterList.push(action.payload);
    },

    removeCharacter(state, action: PayloadAction<string>) {
      state.characterList = state.characterList.filter(character => character._id !== action.payload);
    }
  }
});

const raidActions = raidSlice.actions;
const raidReducer = raidSlice.reducer;

export { raidActions, raidReducer };