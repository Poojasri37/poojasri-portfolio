import { achievements, certifications } from '@/data/portfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Trophy, Award, Medal, Star, Code, Zap, Github, BadgeCheck, GraduationCap } from 'lucide-react';

const achievementIcons: Record<string, React.ReactNode> = {
  trophy: <Trophy className="w-5 h-5" />,
  award: <Award className="w-5 h-5" />,
  medal: <Medal className="w-5 h-5" />,
  star: <Star className="w-5 h-5" />,
  code: <Code className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
};

export function Achievements() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-24">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Achievements & Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition from hackathons, competitions, and industry certifications
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Achievements */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Achievements</h3>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border card-hover"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      {achievementIcons[achievement.icon]}
                    </div>
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border card-hover"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <BadgeCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
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
