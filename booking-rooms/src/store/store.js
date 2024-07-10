import { configureStore } from "@reduxjs/toolkit";
import cabineSlice from "./cabineSlice";

const store = configureStore({
  reducer: {
    cabineStore: cabineSlice,
  },
});

export default store;
