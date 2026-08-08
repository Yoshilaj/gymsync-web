import { Nav } from '@/components/site/Nav';
import { WaveRibbon } from '@/components/site/WaveRibbon';
import { Footer } from '@/components/Footer';
import { HeroScrub } from '@/components/hero/HeroScrub';
import { HearIt } from '@/components/sections/HearIt';
import { OneSet } from '@/components/sections/OneSet';
import { YourPlan } from '@/components/sections/YourPlan';
import { Coaches } from '@/components/sections/Coaches';
import { CoachingBrain } from '@/components/sections/CoachingBrain';
import { Progress } from '@/components/sections/Progress';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';

export default function Page() {
  return (
    <>
      <WaveRibbon />
      <Nav />
      <main>
        <HeroScrub />
        <HearIt />
        <OneSet />
        <YourPlan />
        <Coaches />
        <CoachingBrain />
        <Progress />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
