import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="bg-[#F5F5F1] pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="flex flex-col gap-4">
            <p className="text-[#999] text-sm font-mono tracking-wider">
              // FEATURED WORK
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1a1a1a] leading-[1.1]">
              Things I've built.
            </h2>
            <p className="text-[#666] text-base max-w-md">
              A selection of projects where engineering meets thoughtful product design.
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 text-sm text-[#1a1a1a] hover:text-[#43D17A] transition-smooth whitespace-nowrap"
          >
            View all projects
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-smooth" />
          </a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
