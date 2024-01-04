import { configureStore } from "@reduxjs/toolkit";
import { animeApi } from "./services/animeApi";
import { counterSlice } from "./slices/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (gDM) => gDM().concat(animeApi.middleware),
});
// TODO: export type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
