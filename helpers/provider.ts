import { createClient } from "@supabase/supabase-js";
import { SupabaseClient } from "@supabase/supabase-js";

export const initializeSupabaseClient = (): SupabaseClient => {
  const supabaseUrl = "https://zdprhtfujhbogbpserbi.supabase.co";
  if (!process.env.SUPABASE_KEY) {
    throw new Error("Missing SUPABASE_KEY env variable");
  }
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  return supabase;
};
