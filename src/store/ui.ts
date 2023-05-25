import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialUIState } from './data';

const initialState = initialUIState;

const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsCreate(state, action: PayloadAction<boolean>) {
      state.isCreate = action.payload;
    },
    
    setIsRaidListSelected(state, action: PayloadAction<boolean>) {
      state.isRaidListSelected = action.payload;
    },

    setIsModify(state, action: PayloadAction<boolean>) {
      state.isModify = action.payload;
    }
  }
});

const UIActions = UISlice.actions;
const UIReducer = UISlice.reducer;

export { UIReducer, UIActions };
