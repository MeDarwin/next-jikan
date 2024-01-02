import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter-slicce";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: (gDM) => gDM(),
});
// TODO: export type
export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;