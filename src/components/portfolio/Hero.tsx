import { personalInfo } from '@/data/portfolioData';
import { Github, Linkedin, MapPin, ArrowDown, Download, PhoneCall } from 'lucide-react';
import profileImage from '@/assets/profile-portrait.png';
import resumePdf from '../../../Poojasri_M_Resume_Updated (1).pdf';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-foreground/80 text-sm mb-4 animate-fade-in-up">
            <MapPin className="w-4 h-4" />
            {personalInfo.location}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up delay-100">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-foreground/85 mb-2 animate-fade-in-up delay-200">
            {personalInfo.title}
          </p>
          <p className="text-lg text-primary font-mono mb-6 animate-fade-in-up delay-200 drop-shadow-sm">
            {personalInfo.subtitle}
          </p>

          <p className="text-foreground/80 leading-relaxed mb-8 animate-fade-in-up delay-300">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 mb-6 text-sm text-foreground/80 animate-fade-in-up delay-300">
            <div className="inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-primary" />
              {personalInfo.phone}
            </div>
            <div className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {personalInfo.location}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 animate-fade-in-up delay-400">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Download className="w-5 h-5" />
              Resume
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-foreground/70">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
