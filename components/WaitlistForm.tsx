'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { joinWaitlist, type JoinResult } from '@/app/actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="shrink-0 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_24px_-10px_rgba(46,144,234,0.6)] transition-all hover:bg-[var(--color-accent-deep)] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed sm:px-6 sm:text-sm"
    >
      {pending ? (
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white pulse-dot" />
          Saving…
        </span>
      ) : (
        'Join Waitlist'
      )}
    </button>
  );
}

export function WaitlistForm() {
  const [state, action] = useActionState<JoinResult | null, FormData>(joinWaitlist, null);

  if (state?.ok) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex items-start gap-3 rounded-2xl border border-[#5BE6A6]/40 bg-white p-4 shadow-[0_8px_24px_-12px_rgba(11,28,54,0.15)]"
      >
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5BE6A6]/20">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="#1F9D6B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="text-left">
          <p className="text-sm font-semibold text-[color:var(--color-ink)]">You&rsquo;re on the list.</p>
          <p className="mt-0.5 text-[12.5px] leading-relaxed text-[color:var(--color-ink-soft)]">
            We&rsquo;ll email you the moment GymSync is ready. Welcome to our member.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form
        action={action}
        noValidate
        className="group flex w-full items-center gap-1.5 rounded-full border border-[color:var(--color-line)] bg-white p-1.5 shadow-[0_8px_24px_-12px_rgba(11,28,54,0.15)] transition-colors focus-within:border-[var(--color-accent)] focus-within:shadow-[0_8px_24px_-10px_rgba(46,144,234,0.35)]"
      >
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className="min-w-0 flex-1 bg-transparent px-3.5 py-2.5 text-[14.5px] text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-dim)] outline-none sm:px-4 sm:text-sm"
        />
        <SubmitButton />
      </form>

      {state?.ok === false && (
        <p className="mt-2 pl-4 text-xs text-[color:var(--color-danger)]" role="alert">
          {state.error}
        </p>
      )}
    </div>
  );
}
