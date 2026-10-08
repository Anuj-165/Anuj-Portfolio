import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Cpu,
  Database,
  ShieldCheck,
} from 'lucide-react';

interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: React.ReactNode;
  featured?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 'sthero',
    organization: 'Sthero',
    role: 'Full Stack AI Developer Intern',
    period: '2026',
    type: 'Startup · Internship',
    description:
      'Built the MVP1 of a full-stack platform for discovering, renting, and listing PG accommodations, taking ownership across product development, backend architecture, database design, authentication, and core USP functionality.',
    highlights: [
      'Built the complete web application for PG discovery, searching, renting, and property listing workflows.',
      'Designed the application database architecture and relationships for users, PGs, visits, connections, reviews, and related platform data.',
      'Implemented Supabase Authentication with role-aware user and PG-owner flows.',
      'Developed the backend using FastAPI and integrated it with the React frontend through REST APIs.',
      'Built MVP1 and implemented key USP features that formed the foundation of the platform.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'Supabase',
    ],
    icon: <Code2 size={18} />,
    featured: true,
  },
  {
    id: 'drdo',
    organization: 'DRDO',
    role: 'Trainee · Quantum Technology',
    period: '2025',
    type: 'Defence Research & Development Organisation',
    description:
      'Worked on an embedded control system for a laser-driven atomic clock, focusing on precise frequency control and reliable microcontroller-level signal generation.',
    highlights: [
      'Designed an STM32-based embedded system for precise frequency control in a laser-driven atomic clock.',
      'Developed firmware using timers, PWM, and clock peripherals to stabilize signal frequency.',
      'Optimized microcontroller performance for reliable hardware-level precision control.',
    ],
    technologies: [
      'STM32',
      'Embedded C',
      'PWM',
      'Timers',
      'Clock Peripherals',
      'Firmware',
    ],
    icon: <Cpu size={18} />,
  },
  {
    id: 'delhi-university',
    organization: 'Delhi University',
    role: 'Web & AI Intern',
    period: '2025',
    type: 'University Internship',
    description:
      'Developed a full-stack application combining web development, AI, and OCR pipelines to automate document processing and structured information extraction.',
    highlights: [
      'Built a full-stack application integrating AI and OCR pipelines for automated document processing.',
      'Developed backend APIs to extract structured information from complex document formats.',
      'Connected document-processing workflows with a web-based application for practical use.',
    ],
    technologies: [
      'React',
      'Python',
      'FastAPI',
      'OCR',
      'AI/ML',
      'REST APIs',
    ],
    icon: <BriefcaseBusiness size={18} />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#F5F5F1] py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ─────────────────────────────────────────
            Header
        ───────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="flex flex-col gap-4">
            <p className="text-[#999] text-sm font-mono tracking-wider">
              // EXPERIENCE
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1a1a1a] leading-[1.05]">
              Where I&apos;ve
              <br />
              <span className="text-[#777]">worked & built.</span>
            </h2>
          </div>

          <p className="text-[#666] text-base leading-relaxed max-w-md lg:pb-1">
            Hands-on experience across full-stack development, AI systems,
            embedded engineering, and product development.
          </p>
        </div>

        {/* ─────────────────────────────────────────
            Experience Timeline
        ───────────────────────────────────────── */}
        <div className="relative">

          {/* Vertical timeline */}
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-[#deded9] hidden md:block" />

          <div className="flex flex-col">
            {experiences.map((experience, index) => (
              <article
                key={experience.id}
                className={`
                  relative
                  group
                  grid grid-cols-1 md:grid-cols-[220px_1fr]
                  gap-8 lg:gap-16
                  pb-12 lg:pb-16
                  ${index !== experiences.length - 1
                    ? 'border-b border-[#deded9] mb-12 lg:mb-16'
                    : ''
                  }
                `}
              >
                {/* Timeline marker */}
                <div
                  className="
                    absolute
                    left-[4px]
                    top-2
                    hidden
                    md:flex
                    h-[15px]
                    w-[15px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F5F5F1]
                    border
                    border-[#cfcfca]
                    group-hover:border-[#43D17A]
                    transition-colors
                    duration-300
                    z-10
                  "
                >
                  <div
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#bbb]
                      group-hover:bg-[#43D17A]
                      transition-colors
                      duration-300
                    "
                  />
                </div>

                {/* ───────────────────────────────
                    Organization
                ─────────────────────────────── */}
                <div className="md:pl-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#e9e9e4]
                        text-[#777]
                        group-hover:bg-[#43D17A]/10
                        group-hover:text-[#43D17A]
                        transition-smooth
                      "
                    >
                      {experience.icon}
                    </span>

                    {experience.featured && (
                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.16em]
                          font-medium
                          text-[#43D17A]
                          bg-[#43D17A]/10
                          px-2
                          py-1
                          rounded-full
                        "
                      >
                        Current
                      </span>
                    )}
                  </div>

                  <h3
                    className="
                      text-xl
                      font-medium
                      text-[#1a1a1a]
                      tracking-tight
                    "
                  >
                    {experience.organization}
                  </h3>

                  <p className="text-sm text-[#777] mt-1">
                    {experience.type}
                  </p>

                  <div className="flex items-center gap-1.5 mt-4 text-xs text-[#999] font-mono">
                    <CalendarDays size={12} />
                    {experience.period}
                  </div>
                </div>

                {/* ───────────────────────────────
                    Role + Details
                ─────────────────────────────── */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h4
                        className="
                          text-2xl
                          lg:text-3xl
                          font-light
                          text-[#1a1a1a]
                          tracking-tight
                        "
                      >
                        {experience.role}
                      </h4>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="
                        text-[#bbb]
                        group-hover:text-[#43D17A]
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        transition-smooth
                      "
                    />
                  </div>

                  <p
                    className="
                      text-[#666]
                      text-sm
                      lg:text-base
                      leading-relaxed
                      max-w-3xl
                      mb-6
                    "
                  >
                    {experience.description}
                  </p>

                  {/* Contributions */}
                  <div className="flex flex-col gap-3 mb-7">
                    {experience.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="
                            mt-[7px]
                            h-1
                            w-1
                            shrink-0
                            rounded-full
                            bg-[#43D17A]
                          "
                        />

                        <p
                          className="
                            text-sm
                            leading-relaxed
                            text-[#555]
                            max-w-3xl
                          "
                        >
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          inline-flex
                          items-center
                          px-2.5
                          py-1
                          rounded-full
                          bg-[#e9e9e4]
                          border
                          border-transparent
                          text-[10px]
                          text-[#777]
                          group-hover:bg-[#43D17A]/10
                          group-hover:text-[#43D17A]
                          group-hover:border-[#43D17A]/10
                          transition-smooth
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────
            Bottom statement
        ───────────────────────────────────────── */}
        <div
          className="
            mt-4
            lg:mt-8
            pt-8
            border-t
            border-[#deded9]
            flex
            flex-col
            sm:flex-row
            sm:items-center
            justify-between
            gap-4
          "
        >
          <div className="flex items-center gap-2 text-xs text-[#999]">
            <ShieldCheck size={14} />
            <span>Building across software, AI & hardware.</span>
          </div>

          <span className="text-xs font-mono text-[#aaa]">
            03 EXPERIENCES
          </span>
        </div>
      </div>
    </section>
  );
}