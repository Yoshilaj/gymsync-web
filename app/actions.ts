'use server';

import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase';

export type JoinResult = { ok: true } | { ok: false; error: string };

/** RFC 5321 caps an address at 254 octets — also our anti-garbage bound. */
const MAX_EMAIL_LENGTH = 254;

export async function joinWaitlist(
  _prev: JoinResult | null,
  formData: FormData,
): Promise<JoinResult> {
  // Honeypot: the "company" field is visually hidden and skipped by real
  // users; a filled value means a bot. Pretend success so the bot moves on.
  if (String(formData.get('company') ?? '').length > 0) {
    return { ok: true };
  }

  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  if (
    email.length > MAX_EMAIL_LENGTH ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return { ok: false, error: 'Please enter a valid email.' };
  }

  const h = await headers();
  const supabase = createClient();
  const { error } = await supabase.from('waitlist').insert({
    email,
    // Truncated: these are free-text request headers, not trusted data.
    referrer: h.get('referer')?.slice(0, 500) ?? null,
    user_agent: h.get('user-agent')?.slice(0, 500) ?? null,
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
