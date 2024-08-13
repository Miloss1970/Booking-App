import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [],
  },

  reducers: {
    storeAllBookings: (state, actions) => {
      state.bookings = actions.payload;
    },
  },
});
export const getAllBookings = (state) => {
  return state.bookingStore.bookings;
};

export const getSingleBooking = (state, id) => {
  return state.bookingStore.bookings.find((booking) => booking.id == id);
};

export const { storeAllBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
