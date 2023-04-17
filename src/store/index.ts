import { configureStore } from '@reduxjs/toolkit';
import { calendarReducer } from './calendar';
import { crewReducer } from './crew';

const store = configureStore({
  reducer: { calendar: calendarReducer, crew: crewReducer }
});

export default store;
