import { configureStore } from "@reduxjs/toolkit";
import cabineSlice from "./cabineSlice";
import bookingSlice from "./bookingSlice";

const store = configureStore({
  reducer: {
    cabineStore: cabineSlice,
    bookingStore: bookingSlice,
  },
});

export default store;
