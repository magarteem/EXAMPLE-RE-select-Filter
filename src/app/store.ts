import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import filterSlace from "../modules/filterSlise";

export const store = configureStore({
  reducer: {
    filterSlaceRebuser: filterSlace,
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
