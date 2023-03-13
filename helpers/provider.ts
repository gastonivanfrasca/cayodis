import { createClient } from "@supabase/supabase-js";
import { SupabaseClient } from "@supabase/supabase-js";
import { Tutorial } from "@/entities/Tutorial";

export const initializeSupabaseClient = (): SupabaseClient => {
  const supabaseUrl = "https://zdprhtfujhbogbpserbi.supabase.co";
  if (!process.env.SUPABASE_KEY) {
    throw new Error("Missing SUPABASE_KEY env variable");
  }
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  return supabase;
};

export const getTutorialFromSupabaseTable = async (
  supabase: SupabaseClient,
  tutorialID: string
) => {
  const { data, error } = await supabase
    .from("tutorials")
    .select("*")
    .eq("tutorial_id", tutorialID);
  if (error || !data) {
    console.error(error);
  }
  return data![0] as unknown as Tutorial;
};

export const getTutorialsFromSupabaseTable = async (
  supabase: SupabaseClient
) => {
  let { data: tutorials, error } = await supabase.from("tutorials").select("*");
  if (error) {
    console.error(error);
  }
  return tutorials;
};
