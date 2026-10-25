import { aboutContent } from '@/data/portfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sparkles } from 'lucide-react';

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{aboutContent.heading}</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed text-base"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {aboutContent.stats.map((stat) => (
                  <div key={stat.label} className="bg-card rounded-2xl border border-border p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gradient mb-2">{stat.value}</div>
                    <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Core Focus Areas</h3>
                </div>
                <ul className="space-y-3">
                  {aboutContent.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                      <span className="w-2 h-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
