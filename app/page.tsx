import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import HowItWorks from '@/components/sections/HowItWorks';
import Audience from '@/components/sections/Audience';
import Flow from '@/components/sections/Flow';
import Compare from '@/components/sections/Compare';
import Calculator from '@/components/sections/Calculator';
import Portal from '@/components/sections/Portal';
import Integrations from '@/components/sections/Integrations';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <HowItWorks />
      <Audience />
      <Flow />
      <Compare />
      <Calculator />
      <Portal />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}