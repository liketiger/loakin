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

    setCurrentId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },

    addCharacterList(state, action: PayloadAction<CharacterDetail>) {
      state.characterList.push(action.payload);
    }
  }
});

const raidActions = raidSlice.actions;
const raidReducer = raidSlice.reducer;

export { raidActions, raidReducer };