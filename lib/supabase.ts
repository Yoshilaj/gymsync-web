import { createClient as createSupabaseClient, SupabaseClient } from '@supabase/supabase-js';

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

export const FOUNDER_CAP = Number(process.env.NEXT_PUBLIC_FOUNDER_CAP ?? 500);

export async function getWaitlistCount(): Promise<number> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.rpc('get_waitlist_count');
    if (error) {
      // Fallback to a head count if RPC isn't installed yet
      const { count } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });
      return count ?? 0;
    }
    return Number(data ?? 0);
  } catch {
    return 0;
  }
}
