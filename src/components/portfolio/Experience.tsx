import { education, experience } from '@/data/portfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Product delivery, AI integrations, independent client work, and academic excellence.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <BriefcaseBusiness className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Professional Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((item) => (
                  <div key={item.role} className="border-l border-primary/30 pl-5 relative">
                    <span className="absolute -left-[0.38rem] top-1.5 w-3 h-3 rounded-full bg-primary" />
                    <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-semibold text-lg">{item.role}</h4>
                      {item.period && (
                        <span className="text-sm text-primary font-medium">{item.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="space-y-5">
                {education.map((item) => (
                  <div key={item.degree} className="rounded-xl border border-border bg-secondary/40 p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="font-semibold">{item.degree}</h4>
                      <span className="text-sm text-primary font-medium">{item.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <p className="mt-2 text-sm font-medium text-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
