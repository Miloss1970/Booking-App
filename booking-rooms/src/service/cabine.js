import supabase from "./auth";

export const fetchData = async () => {
  const { data, error } = await supabase.from("cabines").select("*");

  if (error) return error;

  return data;
};
