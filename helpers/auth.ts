import { SupabaseClient } from "@supabase/supabase-js";

export async function signInWithGoogle(
  supabaseClient: SupabaseClient<any, "public", any>
) {
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
  });
  return error;
}

export async function signOut(
  supabaseClient: SupabaseClient<any, "public", any>
) {
  const { error } = await supabaseClient.auth.signOut();
  return error;
}
