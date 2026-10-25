import { personalInfo } from '@/data/portfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Github, Linkedin, MapPin, PhoneCall, FileText } from 'lucide-react';
import resumePdf from '../../../Poojasri_M_Resume_Updated (1).pdf';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration, opportunities, or AI product work? I&apos;d be happy to connect and discuss ideas.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 text-center shadow-sm">
              <div className="inline-flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
                <div className="rounded-xl border border-border bg-secondary/40 p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </div>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="rounded-xl border border-border bg-secondary/40 p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <PhoneCall className="w-4 h-4 text-primary" />
                    Phone
                  </div>
                  <p className="text-sm font-medium">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a href={`mailto:${personalInfo.email}`} className="btn-primary w-full sm:w-auto">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                  <FileText className="w-5 h-5" />
                  Download Resume
                </a>
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
