import supabase from "./auth";

export const fetchData = async ({ available, sortOption }) => {
  let query = supabase.from("cabines").select("*");

  if (available === "available") {
    query = query.eq("available", true);
  }

  switch (sortOption) {
    case "nameAsc":
      query = query.order("status", { ascending: true });
      break;
    case "nameDesc":
      query = query.order("status", { ascending: false });
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

export const addEditCabine = async (id, body) => {
  if (id) {
    //query
    const { data, error } = await supabase
      .from("cabines")
      .update(body)
      .eq("id", id)
      .select();
    if (error) return error;
    return data;
  } else {
    const { data, error } = await supabase
      .from("cabines")
      .upsert(body)
      .select();
    if (error) return error;

    return data;
  }
};

export const fetchSingeCabine = async (id) => {
  const { data, error } = await supabase
    .from("cabines")
    .select()
    .eq("id", id)
    .single();

  if (error) return error;
  return data;
};

export const createUser = async (body) => {
  const { data, error } = await supabase.auth.signUp({
    email: body.email,
    password: body.password,
    options: {
      data: {
        full_name: body.full_name,
      },
    },
  });

  if (error) error.message;
  return data;
};

export const loginUser = async (body) => {
  const { email, password } = body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) error;
  return data;
};
