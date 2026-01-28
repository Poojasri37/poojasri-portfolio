import { skills } from '@/data/portfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Brain, Users, Server, Cloud } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="w-5 h-5" />,
  brain: <Brain className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  server: <Server className="w-5 h-5" />,
  cloud: <Cloud className="w-5 h-5" />,
};

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = Object.values(skills);

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning AI/ML, multi-agent systems, and production-grade engineering
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-card rounded-2xl border border-border p-6 card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
