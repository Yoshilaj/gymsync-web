import { createClient as createSupabaseClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Anon-key client for the one thing this site writes: waitlist signups.
 * The anon key is public by design; safety lives in Supabase RLS — the
 * `waitlist` table allows anon INSERT only (no select policy, so addresses
 * can never be read back through this key).
 */
let cached: SupabaseClient | null = null;

export function createClient(): SupabaseClient {
  if (cached) return cached;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }
  cached = createSupabaseClient(url, anon, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}
