import supabase from "./auth";

export const fetchBooking = async () => {
  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate,status,cabines(name,regularPrice),guests(full_name,email)",
      { count: "exact" }
    );

  if (error) return error;
  return data;
};
