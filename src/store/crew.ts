import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CrewPayloadType } from '../types/render-type';
import { initialCrewState } from './data';

const initialState = initialCrewState;

const crewSlice = createSlice({
  name: 'crew',
  initialState,
  reducers: {
    fetchCrew(state, action: PayloadAction<CrewPayloadType>) {
      state.characterList = action.payload;
    }
  }
});

const crewActions = crewSlice.actions;
const crewReducer = crewSlice.reducer;

export { crewReducer, crewActions };
