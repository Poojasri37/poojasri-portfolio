import { Navbar } from '@/components/portfolio/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Experience } from '@/components/portfolio/Experience';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Achievements } from '@/components/portfolio/Achievements';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';
import { useEffect } from 'react';
import profileImage from '@/assets/profile-portrait.png';

const Index = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || !theme) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <main className="relative isolate min-h-screen bg-transparent text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <img
          src={profileImage}
          alt=""
          className="h-full w-full scale-105 object-cover blur-[3px]"
          style={{ objectPosition: 'left 54%' }}
        />
        <div className="absolute inset-0 bg-background/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-transparent to-background/65" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
