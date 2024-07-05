import supabase from "./auth";

export const fetchData = async (
  available,
  sortByName,

  sortByPrice
) => {
  let query = supabase.from("cabines").select("*");

  if (available) {
    query = query.eq("available", true);
  }

  if (sortByName.name) {
    query = query.order("name", { ascending: sortByName.nameDescending });
  }

  if (sortByPrice.price) {
    query = query.order("regularPrice", {
      ascending: sortByPrice.priceDescending,
    });
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    return { error };
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
