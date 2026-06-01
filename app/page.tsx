import Hero from '@/components/Hero';
import Services from '@/components/Services';
import RetinaFocus from '@/components/RetinaFocus';
import About from '@/components/About';
import Research from '@/components/Research';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <RetinaFocus />
      <About />
      <Research />
      <FAQ />
      <Contact />
    </>
  );
}
