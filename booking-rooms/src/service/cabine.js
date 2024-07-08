import supabase from "./auth";

export const fetchData = async ({ available, sortOption }) => {
  let query = supabase.from("cabines").select("*");

  if (available === "available") {
    query = query.eq("available", true);
  }

  switch (sortOption) {
    case "nameAsc":
      query = query.order("name", { ascending: true });
      break;
    case "nameDesc":
      query = query.order("name", { ascending: false });
      break;
    case "priceAsc":
      query = query.order("regularPrice", { ascending: true });
      break;
    case "priceDesc":
      query = query.order("regularPrice", { ascending: false });
      break;
    default:
      break;
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    return error;
  } else {
    return data;
  }
};

export const addCabine = async (body) => {
  console.log(body);
  const { data, error } = await supabase.from("cabines").upsert(body).select();
  console.log(data);
  if (error) return error;

  return data;
};
