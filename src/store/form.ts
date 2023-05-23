import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialFormState } from './data';

const initialState = initialFormState;

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },

    setLevel(state, action: PayloadAction<string>) {
      state.level = action.payload;
    },

    setTime(state, action: PayloadAction<string>) {
      state.time = action.payload;
    }
  }
});

const formActions = formSlice.actions;
const formReducer = formSlice.reducer;

export { formReducer, formActions };
