import { configureStore } from '@reduxjs/toolkit';
import { calendarReducer } from './calendar';
import { crewReducer } from './crew';

const store = configureStore({
  reducer: { calendar: calendarReducer, crew: crewReducer, modal: modalReducer }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, RootState, AppDispatch };
