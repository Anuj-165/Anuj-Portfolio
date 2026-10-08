import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { ProjectPreview } from '@/components/projects/ProjectPreviews';
import { useArc } from '@/components/arc/ArcContext';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const { openArc } = useArc();

  const isLarge = index === 0;
  const isWide = index === 1;

  return (
    <article
      className={`
        group relative flex flex-col
        bg-[#EFEFEB]
        rounded-2xl
        border border-[#e0e0dc]
        overflow-hidden
        transition-smooth
        hover:border-[#43D17A]/30
        hover:shadow-[0_0_40px_-12px_rgba(67,209,122,0.15)]
        ${isLarge ? 'lg:col-span-2 lg:flex-row' : ''}
      `}
      data-cursor="view"
    >
      {/* ─────────────────────────────────────────────
          Project Preview
      ───────────────────────────────────────────── */}
      <div
        className={`
          relative overflow-hidden
          bg-[#0c0a10]
          ${isLarge
            ? 'lg:w-3/5 aspect-[16/10] lg:aspect-auto lg:min-h-[340px]'
            : isWide
              ? 'aspect-[16/10]'
              : 'aspect-[16/11]'
          }
        `}
      >
        {/* Screenshot */}
        <div
          className="
            absolute inset-0
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.015]
          "
        >
          <ProjectPreview type={project.previewType} />
        </div>

        {/* Subtle project-card overlay */}
        <div
          className="
            absolute inset-0
            z-20
            pointer-events-none
            bg-[#43D17A]/0
            group-hover:bg-[#43D17A]/[0.035]
            transition-colors
            duration-500
          "
        />

        {/* Soft edge vignette */}
        <div
          className="
            absolute inset-0
            z-20
            pointer-events-none
            bg-gradient-to-t
            from-black/[0.10]
            via-transparent
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
          "
        />
      </div>

      {/* ─────────────────────────────────────────────
          Project Information
      ───────────────────────────────────────────── */}
      <div
        className={`
          flex flex-col gap-3
          p-6
          ${isLarge
            ? 'lg:w-2/5 lg:justify-center lg:p-8'
            : ''
          }
        `}
      >
        {/* Number + arrow */}
        <div className="flex items-center justify-between">
          <span
            className="
              text-[#999]
              text-xs
              font-mono
              tracking-wide
              group-hover:text-[#43D17A]
              transition-smooth
            "
          >
            {project.number}
          </span>

          <ArrowUpRight
            size={18}
            className="
              text-[#bbb]
              group-hover:text-[#43D17A]
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
              transition-smooth
            "
          />
        </div>

        {/* Title */}
        <h3
          className="
            text-xl
            lg:text-2xl
            font-medium
            text-[#1a1a1a]
            tracking-tight
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            text-[#666]
            text-sm
            leading-relaxed
            max-w-xl
          "
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                text-[10px]
                px-2.5
                py-1
                rounded-full
                bg-[#e8e8e4]
                text-[#777]
                border border-transparent
                group-hover:bg-[#43D17A]/10
                group-hover:text-[#43D17A]
                group-hover:border-[#43D17A]/10
                transition-smooth
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-2">
          {/* Case Study */}
          <a
            href={project.caseStudyUrl}
            className="
              inline-flex
              items-center
              gap-1
              text-xs
              text-[#1a1a1a]
              hover:text-[#43D17A]
              transition-smooth
              w-fit
            "
          >
            View Case Study

            <ArrowUpRight
              size={12}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          {/* ARC */}
          <button
            type="button"
            onClick={() =>
              openArc(
                `You're looking at **${project.title}**.\n\nAsk me about its architecture, technologies, purpose or implementation.`,
              )
            }
            className="
              inline-flex
              items-center
              gap-1
              text-xs
              text-[#999]
              hover:text-[#43D17A]
              transition-smooth
              w-fit
            "
          >
            Ask ARC

            <ArrowUpRight
              size={12}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>
      </div>
    </article>
  );
}