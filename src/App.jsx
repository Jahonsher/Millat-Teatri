import Curtain from './components/Curtain.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Founder from './components/Founder.jsx';
import Spektakllar from './components/Spektakllar.jsx';
import Jamoa from './components/Jamoa.jsx';
import Matbuot from './components/Matbuot.jsx';
import ChiptaCTA from './components/ChiptaCTA.jsx';
import Footer from './components/Footer.jsx';
import { useReveal, useStatCounters, useTapSparkle } from './hooks/usePageEffects.js';
import { useMagicWand } from './hooks/useMagicWand.js';

export default function App() {
  useReveal();
  useStatCounters();
  useTapSparkle();
  useMagicWand();

  return (
    <>
      <Curtain />
      <Navbar />
      <Hero />
      <Marquee />
      <main>
        <Founder />
        <Spektakllar />
        <Jamoa />
        <Matbuot />
        <ChiptaCTA />
      </main>
      <Footer />
    </>
  );
}
