import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SaaSPage } from './components/SaaSPage';
import { LandingPages } from './components/LandingPages';
import { SkillsAndCertificates } from './components/SkillsAndCertificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PixelWaveBackground } from './components/PixelWaveBackground';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-accent relative overflow-x-hidden">
      <PixelWaveBackground />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4">
          <Hero />
          <About />
          <SaaSPage />
          <LandingPages />
          <SkillsAndCertificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
