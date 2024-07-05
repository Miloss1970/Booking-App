import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "../constans/constants";

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
