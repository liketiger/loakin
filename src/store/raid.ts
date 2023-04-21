import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialRaidState } from "./data";

const initialState = initialRaidState;

const raidSlice = createSlice({
  name: 'raid',
  initialState,
  reducers: {
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    }
  }
});

const raidActions = raidSlice.actions;
const raidReducer = raidSlice.reducer;

export { raidActions, raidReducer };