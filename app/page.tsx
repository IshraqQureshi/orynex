import About from '@/components/About';
import AiNative from '@/components/AiNative';
import Audience from '@/components/Audience';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Nav from '@/components/Nav';
import Principles from '@/components/Principles';
import Process from '@/components/Process';
import RevealFallback from '@/components/RevealFallback';
import Services from '@/components/Services';
import Stack from '@/components/Stack';
import Work from '@/components/Work';

export default function Home() {
  return (
    <div className="ox">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <AiNative />
        <Work />
        <Process />
        <Principles />
        <Audience />
        <Stack />
        <Cta />
      </main>
      <Footer />
      <RevealFallback />
    </div>
  );
}
