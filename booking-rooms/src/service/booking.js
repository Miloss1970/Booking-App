import { transformStatus } from "../utills/helpers";
import supabase from "./auth";

export const fetchBooking = async (fetchData) => {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, status, totalPrice,hasBreakfast,isPaid,numGuests,cabines(name, regularPrice), guests(full_name, email,countryFlag)",
      { count: "exact" }
    );

  if (fetchData.status && fetchData.status !== "All") {
    query = query.eq("status", transformStatus(fetchData.status));
  }
  switch (fetchData.sortOptions) {
    case "priceAsc":
      query = query.order("totalPrice", { ascending: true });
      break;
    case "priceDesc":
      query = query.order("totalPrice", { ascending: false });
      break;
    case "dateAsc":
      query = query.order("startDate", { ascending: true });
      break;
    case "dateDesc":
      query = query.order("startDate", { ascending: false });
      break;
    default:
      break;
  }

  const { data, error } = await query;

  if (error) return error;

  return data;
};

// export const getSingeBookig = async (id) => {
//   const { data, error } = await supabase
//     .from("bookings")
//     .select(
//       "id, created_at, startDate, endDate, status, totalPrice, numGuests,hasBreakfast,isPaid,cabines(name, regularPrice), guests(full_name, email,countryFlag)",
//       { count: "exact" }
//     )
//     .eq("id", id)
//     .single();

//   if (error) return error;

//   return data;
// };

export const fetchSettings = async () => {
  const { data, error } = await supabase.from("settings").select("*");

  if (error) return error;

  return data;
};

export const updateBookingField = async (id, field, value) => {
  const { data, error } = await supabase
    .from("bookings")
    .update({ [field]: value })
    .eq("id", id);

  if (error) return error;

  return data;
};

export const updateSettings = async (settings) => {
  const { data, error } = await supabase
    .from("settings")
    .update(settings)
    .eq("id", 1)
    .single();

  if (error) return error;

  return data;
};
