import { transformStatus } from "../utills/helpers";
import supabase from "./auth";

export const fetchBooking = async (fetchData) => {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, status, totalPrice, cabines(name, regularPrice), guests(full_name, email)",
      { count: "exact" }
    );

  if (fetchData.status && fetchData.status !== "All") {
    query = query.eq("status", transformStatus(fetchData.status));
  }
  console.log(fetchData.sortOptions);
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

  if (error) {
    console.error(error);
    return error;
  }

  return data;
};
