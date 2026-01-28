import { personalInfo } from '@/data/portfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Github, Linkedin, MapPin, Send, FileText } from 'lucide-react';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration, opportunities, or just want to chat about AI? Feel free to reach out!
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Card */}
            <div className="bg-card rounded-2xl border border-border p-8 text-center">
              {/* Location */}
              <div className="inline-flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </div>

              {/* Contact Links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-border">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>

              {/* Email Display */}
              <p className="mt-6 text-sm text-muted-foreground font-mono">
                {personalInfo.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
