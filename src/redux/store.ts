import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {reducer} from './reducers/news';

export const store = configureStore({
  reducer: {
    news: reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
