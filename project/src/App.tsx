import { ArcProvider } from './components/arc/ArcContext';
import Navbar from '@/components/Navbar';
import SocialRail from '@/components/SocialRail';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import ArcPanel from './components/arc/ArcPanel';
import Experience from './components/Experience';

function App() {
  return (
    <ArcProvider>
  <div className="min-h-screen bg-[#080A09] text-[#F5F5F2]">
    <LoadingScreen />
    <CustomCursor />
    <Navbar />
    <SocialRail />

    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>

    <Footer />

    <ArcPanel />
  </div>
</ArcProvider>
  );
}

export default App;
