import { Hero } from '@/components/Hero';
import { FOUNDER_CAP, getWaitlistCount } from '@/lib/supabase';

export const revalidate = 60;

export default async function Page() {
  const signups = await getWaitlistCount();
  return <Hero signups={signups} cap={FOUNDER_CAP} />;
}
