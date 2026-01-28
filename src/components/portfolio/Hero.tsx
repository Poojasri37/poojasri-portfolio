import { personalInfo } from '@/data/portfolioData';
import { Github, Linkedin, MapPin, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/profile-placeholder.jpg';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative animate-fade-in-up">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/30 glow animate-pulse-glow">
              <img
                src={profileImage}
                alt={`${personalInfo.name} - AI & Data Science Engineer`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium">Available</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            {/* Location */}
            <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4 animate-fade-in-up">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up delay-100">
              Hi, I'm{' '}
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl font-medium text-muted-foreground mb-2 animate-fade-in-up delay-200">
              {personalInfo.title}
            </p>
            <p className="text-lg text-primary font-mono mb-6 animate-fade-in-up delay-200">
              {personalInfo.subtitle}
            </p>

            {/* Summary */}
            <p className="text-muted-foreground leading-relaxed mb-8 animate-fade-in-up delay-300">
              {personalInfo.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-400">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
