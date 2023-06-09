import { configureStore } from '@reduxjs/toolkit';
import { calendarReducer } from './calendar';
import { crewReducer } from './crew';
import { modalReducer } from './modal';
import { raidReducer } from './raid';
import { UIReducer } from './ui';
import { formReducer } from './form';

const store = configureStore({
  reducer: { calendar: calendarReducer, crew: crewReducer, modal: modalReducer, raid: raidReducer, ui: UIReducer, form: formReducer }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, RootState, AppDispatch };
