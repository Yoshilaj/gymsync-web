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
      className="shrink-0 rounded-full bg-white px-5 py-2.5 text-[13.5px] font-semibold text-[#06101F] shadow-[0_8px_24px_-10px_rgba(255,255,255,0.4)] transition-all hover:bg-white/90 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed sm:px-6 sm:text-sm"
    >
      {pending ? (
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#06101F] pulse-dot" />
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
        className="flex items-start gap-3 rounded-2xl border border-[#5BE6A6]/25 bg-[#5BE6A6]/8 p-4 backdrop-blur-md"
      >
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5BE6A6]/20">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="#5BE6A6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="text-left">
          <p className="text-sm font-semibold text-white">You&rsquo;re on the list.</p>
          <p className="mt-0.5 text-[12.5px] leading-relaxed text-white/65">
            We&rsquo;ll email you the moment GymSync is ready. Welcome to the homies.
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
        className="group flex w-full items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] p-1.5 backdrop-blur-md transition-colors focus-within:border-white/25 focus-within:bg-white/[0.08]"
      >
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className="min-w-0 flex-1 bg-transparent px-3.5 py-2.5 text-[14.5px] text-white placeholder:text-white/40 outline-none sm:px-4 sm:text-sm"
        />
        <SubmitButton />
      </form>

      {state?.ok === false && (
        <p className="mt-2 pl-4 text-xs text-[#FF9B9B]" role="alert">
          {state.error}
        </p>
      )}
    </div>
  );
}
