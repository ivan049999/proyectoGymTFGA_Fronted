import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/** Cliente singleton. Requiere `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en `.env.local`. */
export function getSupabase(): SupabaseClient {
  if (client) return client;
  const url = import.meta.env.VITE_SUPABASE_URL?.trim();
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();
  if (!url || !anonKey) {
    throw new Error(
      "Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY. Crea un archivo .env.local en la raíz del proyecto (Vite no lee .env.example), pega ahí las dos variables desde Supabase → Settings → API y reinicia npm run dev."
    );
  }
  client = createClient(url, anonKey);
  return client;
}
