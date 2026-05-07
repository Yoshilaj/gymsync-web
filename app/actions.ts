'use server';

import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase';

export type JoinResult = { ok: true } | { ok: false; error: string };

export async function joinWaitlist(
  _prev: JoinResult | null,
  formData: FormData,
): Promise<JoinResult> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Please enter a valid email.' };
  }

  const h = await headers();
  const supabase = createClient();
  const { error } = await supabase.from('waitlist').insert({
    email,
    referrer: h.get('referer') ?? null,
    user_agent: h.get('user-agent') ?? null,
  });

  // 23505 = unique_violation. Treat re-signups as success.
  if (error && error.code !== '23505') {
    console.error('[joinWaitlist] supabase insert failed', {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
    });
    return { ok: false, error: 'Something went wrong. Please try again.' };
  }

  revalidatePath('/');
  return { ok: true };
}
