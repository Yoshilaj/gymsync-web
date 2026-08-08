# gymsync-web

The GymSync marketing site — gymsyncapp.me. Next.js 15 App Router, React 19,
Tailwind CSS v4, Supabase (waitlist), Framer Motion.

The design system mirrors the app: tokens in `app/globals.css` are lifted
verbatim from `gymsync-app/src/theme/` (navy-tinted neutrals, brand blue for
the coach, orange exclusively for the user's live voice). The site follows the
app — change tokens there first.

## Pages

- `/` — landing: scroll-scrubbed hero film (`public/hero-scrub.mp4`), audio
  demo with real product voices (`public/audio/`), coaches, pricing (computed
  from `lib/catalog.ts` cents integers — never hand-type a price), FAQ.
- `/support` — subscription/cancellation/deletion help. **No reply-time
  promises here** until the support mailbox is verified.
- `/privacy-policy`, `/terms-of-service` — **Apple points at these URLs**
  (App Store Connect privacy URL + description links). They must never 404.

## Launch-day switch

`lib/flags.ts` → `APP_STORE_URL`. While `null`, every CTA is the waitlist
form; set the URL when Apple approves and every CTA becomes a download button.

## Env

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Supabase schema (waitlist)

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

## Dev

```bash
npm run dev    # http://localhost:3000
npm run build
```

`/wireframe` is the parked greybox skeleton from the redesign; delete it once
the live page is signed off.
