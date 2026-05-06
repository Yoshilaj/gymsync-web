# GymHomie Waitlist Site

High-converting single-page waitlist for GymHomie. Built with Next.js 15 App Router + Tailwind v4 + Supabase.

## Setup

1. **Install deps**
   ```bash
   npm install
   ```

2. **Supabase: create the table** (in Supabase SQL editor)
   ```sql
   create table public.waitlist (
     id uuid primary key default gen_random_uuid(),
     email text not null unique,
     referrer text,
     user_agent text,
     created_at timestamptz not null default now()
   );

   create index waitlist_created_at_idx on public.waitlist (created_at desc);

   alter table public.waitlist enable row level security;

   create policy "anon insert" on public.waitlist
     for insert to anon with check (true);

   create or replace function public.get_waitlist_count()
   returns int language sql security definer as $$
     select count(*)::int from public.waitlist;
   $$;
   grant execute on function public.get_waitlist_count to anon;
   ```

3. **Env vars** — copy `.env.local.example` → `.env.local` and fill:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   NEXT_PUBLIC_FOUNDER_CAP=500
   ```

4. **Dev server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000.

## Deploy

Push to GitHub → import to Vercel → set the 3 env vars in Vercel project settings → deploy.

## Files

- `app/page.tsx` — composes the full landing page
- `app/actions.ts` — `joinWaitlist` server action
- `app/layout.tsx` — metadata, OG, fonts
- `app/opengraph-image.tsx` — auto-generated OG image
- `lib/supabase.ts` — Supabase client + `getWaitlistCount`
- `components/` — Hero, OfferBanner, HowItWorks, FeatureGrid, SocialProof, FAQ, FinalCTA, WaitlistForm, SpotsLeftCounter, StickyOfferBar, PhoneMockup, Footer
