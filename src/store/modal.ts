import { createSlice } from '@reduxjs/toolkit';
import { initialModalState } from './data';

const initialState = initialModalState;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isOpen = !state.isOpen;
    }
  }
});

const modalActions = modalSlice.actions;
const modalReducer = modalSlice.reducer;

export { modalReducer, modalActions };
