import { featuredProjects, otherProjects, type Project } from '@/data/portfolioData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Github, ExternalLink, ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import { useState } from 'react';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="project-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {project.title.includes('Winner') && (
              <Trophy className="w-5 h-5 text-yellow-500" />
            )}
            <h3 className="font-bold text-lg">{project.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Expandable Tech Stack */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-4 border-t border-border mb-4">
          <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        {/* GitHub Links */}
        <div className="flex items-center gap-2 flex-wrap">
          {project.repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">{repo.label}</span>
            </a>
          ))}
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {isExpanded ? (
            <>
              Hide Details <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              View Details <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const [showOther, setShowOther] = useState(false);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Key Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world AI systems I've built — from multi-agent architectures to production-grade MLOps pipelines
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Other Projects Section */}
          <div className="mt-12">
            <button
              onClick={() => setShowOther(!showOther)}
              className="w-full py-4 px-6 bg-card border border-border rounded-xl flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
            >
              <span className="font-medium">
                {showOther ? 'Hide' : 'Show'} Other Technical Projects ({otherProjects.length})
              </span>
              {showOther ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {/* Other Projects Grid */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                showOther ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-card rounded-xl border border-border p-5 card-hover"
                  >
                    <h4 className="font-semibold mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.repos.length > 0 && (
                      <div className="flex items-center gap-2">
                        {project.repos.map((repo, idx) => (
                          <a
                            key={idx}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="w-3 h-3" />
                            {repo.label}
                          </a>
                        ))}
                      </div>
                    )}
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
