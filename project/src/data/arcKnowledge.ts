
import { profile } from '@/data/profile';
import {
  skillCategories,
  allSkills,
  findSkill,
  getSkillsByCategory,
} from '@/data/skills';
import {
  projectDetails,
  findProject,
  getProjectDetail,
} from '@/data/projects';
import {
  education,
  currentlyLearning,
} from '@/data/education';

/* =========================================================
   TYPES
========================================================= */

export interface ArcSource {
  label: string;
  href: string;
}

export interface ArcResponse {
  text: string;
  sources: ArcSource[];
  links: ArcSource[];
}

interface Intent {
  match: (query: string) => boolean;
  respond: (query: string) => ArcResponse;
}

/* =========================================================
   HELPERS
========================================================= */

const lower = (value: string) => value.toLowerCase();

const containsAny = (
  value: string,
  terms: string[],
): boolean => {
  const text = lower(value);

  return terms.some((term) =>
    text.includes(lower(term)),
  );
};

/* =========================================================
   EXPERIENCE KNOWLEDGE
========================================================= */

interface ArcExperience {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

const experiences: ArcExperience[] = [
  {
    id: 'sthero',
    organization: 'Sthero',
    role: 'Full Stack AI Developer Intern',
    period: '2026',
    type: 'Startup · Internship',
    description:
      'Built the MVP1 of a full-stack platform for discovering, renting, and listing PG accommodations, taking ownership across frontend development, backend architecture, database design, authentication, and core product functionality.',
    highlights: [
      'Built the complete web application for PG discovery, searching, renting, and property listing workflows.',
      'Designed the database architecture and relationships for users, PGs, visits, connections, reviews, and related platform data.',
      'Implemented Supabase Authentication with role-aware user and PG-owner flows.',
      'Developed the backend using FastAPI and integrated it with the React frontend through REST APIs.',
      'Built MVP1 and implemented core USP functionality for the platform.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'Supabase',
      'REST APIs',
    ],
  },

  {
    id: 'drdo',
    organization:
      'Defence Research and Development Organisation (DRDO)',
    role: 'Trainee · Quantum Technology',
    period: '2025',
    type: 'Research / Embedded Systems',
    description:
      'Worked on an STM32-based embedded control system for precise frequency control in a laser-driven atomic clock.',
    highlights: [
      'Designed an STM32-based embedded system for precise frequency control in a laser-driven atomic clock.',
      'Developed firmware utilizing timers, PWM, and clock peripherals to stabilize signal frequency.',
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
  },

  {
    id: 'delhi-university',
    organization: 'Delhi University',
    role: 'Web & AI Intern',
    period: '2025',
    type: 'University Internship',
    description:
      'Developed a full-stack application combining web development, AI, and OCR pipelines for automated document processing and structured information extraction.',
    highlights: [
      'Built a full-stack application integrating AI and OCR pipelines for automated document processing.',
      'Developed backend APIs to extract structured information from complex document formats.',
      'Connected document-processing workflows with a web application for practical use.',
    ],
    technologies: [
      'React',
      'Python',
      'FastAPI',
      'OCR',
      'AI/ML',
      'REST APIs',
    ],
  },
];

/* =========================================================
   SOURCES
========================================================= */

const sources = {
  about: {
    label: 'About',
    href: '#about',
  },

  projects: {
    label: 'Projects',
    href: '#projects',
  },

  skills: {
    label: 'Skills',
    href: '#skills',
  },

  experience: {
    label: 'Experience',
    href: '#experience',
  },

  contact: {
    label: 'Contact',
    href: '#contact',
  },

  finpilot: {
    label: 'FinPilot',
    href: '#projects',
  },

  sakhi: {
    label: 'Sakhi',
    href: '#projects',
  },

  trader: {
    label: 'Trader Expert',
    href: '#projects',
  },

  sthero: {
    label: 'Sthero',
    href: '#experience',
  },

  drdo: {
    label: 'DRDO',
    href: '#experience',
  },

  delhiUniversity: {
    label: 'Delhi University',
    href: '#experience',
  },
};

/* =========================================================
   FALLBACK
========================================================= */

const noInfo: ArcResponse = {
  text:
    "I don't have enough information about that yet, and I don't want to make something up.\n\nHere's what I can help with:",
  sources: [],
  links: [
    {
      label: 'Ask about projects',
      href: 'arc:projects',
    },
    {
      label: 'Ask about skills',
      href: 'arc:skills',
    },
    {
      label: 'Ask about experience',
      href: 'arc:experience',
    },
    {
      label: 'Ask about technical background',
      href: 'arc:background',
    },
  ],
};

/* =========================================================
   INTENTS
========================================================= */

const intents: Intent[] = [

  /* -------------------------------------------------------
     WHO IS ANUJ
  ------------------------------------------------------- */

  {
    match: (query) => {
      const q = lower(query);

      return (
        (q.includes('who is') && q.includes('anuj')) ||
        q.includes('about anuj') ||
        q === 'who is anuj' ||
        q === 'who is anuj?'
      );
    },

    respond: () => ({
      text:
        `**${profile.name}** is a ${profile.role} based in ${profile.location}.\n\n` +
        `${profile.bio}\n\n` +
        `**Focus:** ${profile.focus}`,

      sources: [sources.about],

      links: [
        {
          label: 'Explore projects',
          href: 'arc:projects',
        },
        {
          label: 'View skills',
          href: 'arc:skills',
        },
        {
          label: 'View experience',
          href: 'arc:experience',
        },
      ],
    }),
  },

  /* -------------------------------------------------------
     WHAT HAS HE BUILT
  ------------------------------------------------------- */

  {
    match: (query) => {
      const q = lower(query);

      return (
        (q.includes('what') &&
          (q.includes('build') ||
            q.includes('built') ||
            q.includes('create') ||
            q.includes('created'))) ||
        q.includes('what has he done') ||
        q.includes('projects')
      );
    },

    respond: () => {
      const projects = Object.values(projectDetails);

      const list = projects
        .map(
          (project) =>
            `**${project.name}** — ${project.description}`,
        )
        .join('\n\n');

      return {
        text:
          `Anuj has built and worked on several full-stack and AI-powered systems:\n\n${list}`,

        sources: [sources.projects],

        links: projects.map((project) => ({
          label: `Explore ${project.name}`,
          href: `arc:project:${project.id}`,
        })),
      };
    },
  },

  /* -------------------------------------------------------
     EXPERIENCE OVERVIEW
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'experience',
        'work experience',
        'worked',
        'where has he worked',
        'internships',
        'internship experience',
        'companies',
        'organizations',
      ]),

    respond: () => {
      const list = experiences
        .map(
          (experience) =>
            `**${experience.organization}** — ${experience.role} (${experience.period})\n${experience.description}`,
        )
        .join('\n\n');

      return {
        text:
          `Anuj's professional and technical experience includes:\n\n${list}`,

        sources: [sources.experience],

        links: experiences.map((experience) => ({
          label: `View ${experience.organization}`,
          href: `arc:experience:${experience.id}`,
        })),
      };
    },
  },

  /* -------------------------------------------------------
     STHERO
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'sthero',
        's t hero',
        'pg platform',
        'pg rental',
        'pg renting',
        'pg application',
        'pg website',
      ]),

    respond: (query) => {
      const experience = experiences.find(
        (item) => item.id === 'sthero',
      )!;

      const q = lower(query);

      if (
        q.includes('how') ||
        q.includes('built') ||
        q.includes('architecture') ||
        q.includes('technical') ||
        q.includes('technology') ||
        q.includes('stack')
      ) {
        return {
          text:
            `**Sthero — ${experience.role}**\n\n` +
            `${experience.description}\n\n` +
            `**Technical stack:** ${experience.technologies.join(' · ')}\n\n` +
            `**What Anuj built:**\n` +
            experience.highlights
              .map((item) => `• ${item}`)
              .join('\n'),

          sources: [sources.sthero],

          links: [
            {
              label: 'View Experience',
              href: '#experience',
            },
          ],
        };
      }

      return {
        text:
          `**Sthero** is a startup where Anuj worked as a **Full Stack AI Developer Intern**.\n\n` +
          `${experience.description}\n\n` +
          `He worked across the React frontend, FastAPI backend, database architecture, Supabase authentication, and MVP1/USP implementation.`,

        sources: [sources.sthero],

        links: [
          {
            label: 'View Experience',
            href: '#experience',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     DRDO
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'drdo',
        'defence research',
        'defense research',
        'atomic clock',
        'quantum technology',
        'laser driven atomic clock',
        'stm32',
      ]),

    respond: () => {
      const experience = experiences.find(
        (item) => item.id === 'drdo',
      )!;

      return {
        text:
          `**DRDO — ${experience.role}**\n\n` +
          `${experience.description}\n\n` +
          `**Work completed:**\n` +
          experience.highlights
            .map((item) => `• ${item}`)
            .join('\n') +
          `\n\n**Technologies:** ${experience.technologies.join(' · ')}`,

        sources: [sources.drdo],

        links: [
          {
            label: 'View Experience',
            href: '#experience',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     DELHI UNIVERSITY
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'delhi university',
        'du internship',
        'web ai intern',
        'ocr internship',
        'ocr work',
        'document processing',
      ]),

    respond: () => {
      const experience = experiences.find(
        (item) => item.id === 'delhi-university',
      )!;

      return {
        text:
          `**Delhi University — ${experience.role}**\n\n` +
          `${experience.description}\n\n` +
          `**Contributions:**\n` +
          experience.highlights
            .map((item) => `• ${item}`)
            .join('\n') +
          `\n\n**Technologies:** ${experience.technologies.join(' · ')}`,

        sources: [sources.delhiUniversity],

        links: [
          {
            label: 'View Experience',
            href: '#experience',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     SAKHI
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'sakhi',
        'सखी',
        'women health',
        'women safety',
        'menstrual',
        'period tracker',
        'health companion',
        'health assistant',
      ]),

    respond: (query) => {
      const project = projectDetails.sakhi;
      const q = lower(query);

      if (
        q.includes('how') ||
        q.includes('architecture') ||
        q.includes('built') ||
        q.includes('technology') ||
        q.includes('stack')
      ) {
        return {
          text:
            `**${project.name}**\n\n` +
            `${project.description}\n\n` +
            `**Architecture:** ${project.architecture}\n\n` +
            `**Frontend:** ${project.frontend.join(', ')}\n\n` +
            `**Backend:** ${project.backend.join(', ')}\n\n` +
            `**AI / ML:** ${project.aiMl.join(', ')}`,

          sources: [sources.sakhi],

          links: [
            {
              label: 'Explore Sakhi',
              href: '#projects',
            },
          ],
        };
      }

      return {
        text:
          `**${project.name}** is a women's health and safety companion.\n\n` +
          `${project.description}\n\n` +
          `**Key capabilities:**\n` +
          `• AI health assistance\n` +
          `• Menstrual cycle tracking\n` +
          `• Educational resources\n` +
          `• Community storytelling\n` +
          `• Local medical/pharmacy discovery\n` +
          `• Secure authentication\n\n` +
          `**Stack:** ${project.technologies.join(' · ')}`,

        sources: [sources.sakhi],

        links: [
          {
            label: 'Explore Sakhi',
            href: '#projects',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     FINPILOT
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'finpilot',
        'finance project',
        'finance platform',
        'personal finance',
        'expense prediction',
        'financial health',
      ]),

    respond: (query) => {
      const project = projectDetails.finpilot;
      const q = lower(query);

      if (
        q.includes('how') ||
        q.includes('built') ||
        q.includes('architecture') ||
        q.includes('technical') ||
        q.includes('stack')
      ) {
        return {
          text:
            `**${project.name}** is built with **${project.technologies.join(', ')}**.\n\n` +
            `${project.architecture}\n\n` +
            `**AI / ML:** ${project.aiMl.join(', ')}`,

          sources: [sources.finpilot],

          links: [
            {
              label: 'Explore FinPilot',
              href: '#projects',
            },
          ],
        };
      }

      return {
        text:
          `**${project.name}**\n\n` +
          `${project.description}\n\n` +
          `**Problem:** ${project.problem}\n\n` +
          `**Solution:** ${project.solution}\n\n` +
          `**Stack:** ${project.technologies.join(' · ')}\n\n` +
          `**Status:** ${project.currentStatus}`,

        sources: [sources.finpilot],

        links: [
          {
            label: 'Explore FinPilot',
            href: '#projects',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     TRADER EXPERT
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'trader expert',
        'trading project',
        'stock project',
        'stock market',
        'stock analysis',
        'trading platform',
        'market analytics',
      ]),

    respond: () => {
      const project = projectDetails['trader-expert'];

      return {
        text:
          `**${project.name}**\n\n` +
          `${project.description}\n\n` +
          `**Problem:** ${project.problem}\n\n` +
          `**Solution:** ${project.solution}\n\n` +
          `**Stack:** ${project.technologies.join(' · ')}\n\n` +
          `**AI / ML:** ${project.aiMl.join(', ')}\n\n` +
          `**Architecture:** ${project.architecture}`,

        sources: [sources.trader],

        links: [
          {
            label: 'Explore Trader Expert',
            href: '#projects',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     AI / ML PROJECTS
  ------------------------------------------------------- */

  {
    match: (query) => {
      const q = lower(query);

      return (
        (q.includes('ai') ||
          q.includes('ml') ||
          q.includes('machine learning') ||
          q.includes('artificial intelligence')) &&
        (q.includes('project') ||
          q.includes('work') ||
          q.includes('built'))
      );
    },

    respond: () => {
      const aiProjects = Object.values(projectDetails).filter(
        (project) => project.aiMl.length > 0,
      );

      const list = aiProjects
        .map(
          (project) =>
            `**${project.name}** — ${project.aiMl.join(', ')}`,
        )
        .join('\n');

      return {
        text:
          `Anuj's AI/ML work includes:\n\n${list}\n\n` +
          `His AI/ML toolkit includes **${getSkillsByCategory(
            'AI / ML',
          ).join(', ')}**.`,

        sources: [sources.projects, sources.skills],

        links: aiProjects.map((project) => ({
          label: `Explore ${project.name}`,
          href: `arc:project:${project.id}`,
        })),
      };
    },
  },

  /* -------------------------------------------------------
     GENAI / LLM
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'genai',
        'generative ai',
        'llm',
        'llms',
        'large language model',
        'rag',
        'retrieval augmented',
        'ai agents',
        'agents',
        'prompt engineering',
        'ollama',
        'n8n',
        'automation',
        'ai automation',
      ]),

    respond: (query) => {
      const genAi = getSkillsByCategory('GenAI & LLMs');
      const tools = getSkillsByCategory('AI Tools');

      return {
        text:
          `Anuj's **GenAI & LLM** toolkit includes:\n\n` +
          `**GenAI:** ${genAi.join(', ')}\n\n` +
          `**AI Tools:** ${tools.join(', ')}\n\n` +
          `He is particularly interested in building practical AI-powered products, integrating LLMs into applications, using RAG and AI agents, and exploring local/low-cost AI workflows with tools such as Ollama and n8n.`,

        sources: [sources.skills],

        links: [
          {
            label: 'View Skills',
            href: '#skills',
          },
          {
            label: 'Explore Projects',
            href: '#projects',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     N8N
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'n8n',
        'workflow automation',
        'automation tools',
        'ai workflow',
      ]),

    respond: () => ({
      text:
        `**n8n** is part of Anuj's **GenAI & LLM** toolkit.\n\n` +
        `He uses the broader AI automation stack around **LLMs, AI agents, RAG, Ollama, prompt engineering, and workflow automation** to build practical AI systems.`,

      sources: [sources.skills],

      links: [
        {
          label: 'View GenAI Skills',
          href: '#skills',
        },
      ],
    }),
  },

  /* -------------------------------------------------------
     AI TOOLS
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'chatgpt',
        'claude',
        'gemini',
        'github copilot',
        'copilot',
        'bolt',
        'ai tools',
      ]),

    respond: () => {
      const tools = getSkillsByCategory('AI Tools');

      return {
        text:
          `Anuj's AI development tools include **${tools.join(
            ', ',
          )}**.\n\n` +
          `These tools are part of his development workflow for ideation, coding, prototyping, research, and AI-assisted product development.`,

        sources: [sources.skills],

        links: [
          {
            label: 'View AI Tools',
            href: '#skills',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     BACKEND
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'backend',
        'back-end',
        'server',
        'api',
        'fastapi',
        'node',
        'express',
        'sqlalchemy',
        'rest api',
      ]),

    respond: () => {
      const backend = getSkillsByCategory('Backend');
      const database = getSkillsByCategory('Database');

      return {
        text:
          `Anuj works across **${backend.join(', ')}**.\n\n` +
          `His backend work includes REST API development, authentication, authorization, CRUD systems, database integration, and application architecture.\n\n` +
          `**Databases:** ${database.join(', ')}\n\n` +
          `Sthero is a strong example of this stack, where he built a React frontend connected to a FastAPI backend with PostgreSQL and Supabase.`,

        sources: [sources.skills, sources.sthero],

        links: [
          {
            label: 'View Skills',
            href: '#skills',
          },
          {
            label: 'View Sthero Experience',
            href: '#experience',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     FRONTEND
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'frontend',
        'front-end',
        'react',
        'next.js',
        'typescript',
        'javascript',
        'tailwind',
        'framer motion',
      ]),

    respond: () => {
      const frontend = getSkillsByCategory('Frontend');

      return {
        text:
          `Anuj's frontend stack includes **${frontend.join(
            ', ',
          )}**.\n\n` +
          `He primarily works with React and TypeScript for building responsive, product-focused web applications, with Tailwind CSS and Framer Motion for UI development and interaction.`,

        sources: [sources.skills],

        links: [
          {
            label: 'View Skills',
            href: '#skills',
          },
          {
            label: 'Explore Projects',
            href: '#projects',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     DATABASE
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'database',
        'postgres',
        'postgresql',
        'mongodb',
        'mongo',
        'sqlite',
        'supabase',
      ]),

    respond: () => {
      const database = getSkillsByCategory('Database');

      return {
        text:
          `Anuj works with **${database.join(', ')}**.\n\n` +
          `**PostgreSQL** is used in full-stack applications such as FinPilot and Sthero.\n\n` +
          `**Supabase** is used for authentication and backend infrastructure in Sthero.\n\n` +
          `He also works with **MongoDB** and **SQLite** depending on project requirements.`,

        sources: [sources.skills, sources.sthero],

        links: [
          {
            label: 'View Database Skills',
            href: '#skills',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     DEPLOYMENT
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'deployment',
        'deploy',
        'hosting',
        'vercel',
        'render',
        'railway',
        'production',
      ]),

    respond: () => {
      const deployment = getSkillsByCategory('Deployment');

      return {
        text:
          `Anuj's deployment toolkit includes **${deployment.join(
            ', ',
          )}**.\n\n` +
          `He works with modern cloud deployment platforms for hosting frontend applications, backend services, and full-stack projects.`,

        sources: [sources.skills],

        links: [
          {
            label: 'View Deployment Skills',
            href: '#skills',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     CI/CD
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'ci/cd',
        'cicd',
        'continuous integration',
        'continuous deployment',
        'docker',
        'github actions',
        'git',
        'github',
      ]),

    respond: () => {
      const cicd = getSkillsByCategory('CI / CD');

      return {
        text:
          `Anuj's CI/CD and development workflow includes **${cicd.join(
            ', ',
          )}**.\n\n` +
          `This covers version control with Git and GitHub, containerization with Docker, and automated workflows with GitHub Actions.`,

        sources: [sources.skills],

        links: [
          {
            label: 'View CI/CD Skills',
            href: '#skills',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     PYTHON
  ------------------------------------------------------- */

  {
    match: (query) =>
      lower(query).includes('python'),

    respond: () => {
      const pythonProjects = Object.values(
        projectDetails,
      ).filter((project) =>
        project.technologies.some(
          (technology) =>
            lower(technology).includes('python'),
        ),
      );

      const experienceProjects = experiences.filter(
        (experience) =>
          experience.technologies.some(
            (technology) =>
              lower(technology).includes('python'),
          ),
      );

      return {
        text:
          `Anuj uses **Python** heavily across backend and AI/ML development.\n\n` +
          `**Projects:**\n` +
          pythonProjects
            .map(
              (project) =>
                `• **${project.name}** — ${project.technologies.join(', ')}`,
            )
            .join('\n') +
          `\n\n**Experience:**\n` +
          experienceProjects
            .map(
              (experience) =>
                `• **${experience.organization}** — ${experience.role}`,
            )
            .join('\n') +
          `\n\nHe uses Python for FastAPI, AI/ML, OCR, data processing, and intelligent application features.`,

        sources: [sources.skills, sources.projects, sources.experience],

        links: [
          {
            label: 'View Skills',
            href: '#skills',
          },
          {
            label: 'View Experience',
            href: '#experience',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     TECHNICAL PROFILE
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'technical summary',
        'technical profile',
        'technical background',
        'tech background',
        'quick technical',
        'technology profile',
      ]),

    respond: () => {
      const categories = skillCategories
        .map(
          (category) =>
            `**${category.title}:** ${category.items.join(', ')}`,
        )
        .join('\n');

      return {
        text:
          `Here's Anuj's technical profile:\n\n${categories}\n\n` +
          `He applies these technologies across full-stack applications, AI/ML systems, GenAI workflows, backend services, and product development.`,

        sources: [sources.skills],

        links: [
          {
            label: 'View Skills',
            href: '#skills',
          },
          {
            label: 'Explore Projects',
            href: '#projects',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     WHAT TECHNOLOGIES DOES HE USE
  ------------------------------------------------------- */

  {
    match: (query) => {
      const q = lower(query);

      return (
        q.includes('technologies') ||
        q.includes('technology stack') ||
        q.includes('tech stack') ||
        q.includes('what does he use') ||
        q.includes('what does he work with') ||
        q.includes('what tools does he use')
      );
    },

    respond: () => {
      const categories = skillCategories
        .map(
          (category) =>
            `**${category.title}:** ${category.items.join(', ')}`,
        )
        .join('\n');

      return {
        text:
          `Here's what Anuj works with:\n\n${categories}`,

        sources: [sources.skills],

        links: [
          {
            label: 'View Skills',
            href: '#skills',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     RECRUITER SUMMARY
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'recruiter',
        'candidate',
        'candidate overview',
        'recruiter summary',
        '30 second',
        '30-second',
        'hire anuj',
        'why hire',
      ]),

    respond: () => {
      const frontend = getSkillsByCategory('Frontend');
      const backend = getSkillsByCategory('Backend');
      const database = getSkillsByCategory('Database');
      const aiMl = getSkillsByCategory('AI / ML');
      const genAi = getSkillsByCategory('GenAI & LLMs');

      return {
        text:
          `### ${profile.name}\n` +
          `${profile.role} · ${profile.location}\n\n` +
          `${profile.bio}\n\n` +

          `### Technical strengths\n` +
          `**Frontend:** ${frontend.join(', ')}\n` +
          `**Backend:** ${backend.join(', ')}\n` +
          `**Databases:** ${database.join(', ')}\n` +
          `**AI/ML:** ${aiMl.join(', ')}\n` +
          `**GenAI:** ${genAi.join(', ')}\n\n` +

          `### Experience\n` +
          experiences
            .map(
              (experience) =>
                `**${experience.organization}** — ${experience.role}`,
            )
            .join('\n') +
          `\n\n` +

          `### Selected projects\n` +
          `**FinPilot** — AI-powered personal finance platform\n` +
          `**Sakhi** — Women's health and safety companion\n` +
          `**Trader Expert** — Stock-market analytics and AI insights\n\n` +

          `### Profile\n` +
          `Anuj's work spans full-stack development, backend engineering, AI/ML, GenAI, automation, and embedded systems.`,

        sources: [
          sources.about,
          sources.projects,
          sources.skills,
          sources.experience,
        ],

        links: [
          {
            label: 'View Projects',
            href: '#projects',
          },
          {
            label: 'View Experience',
            href: '#experience',
          },
          {
            label: 'View Skills',
            href: '#skills',
          },
          {
            label: 'Contact Anuj',
            href: '#contact',
          },
        ],
      };
    },
  },

  /* -------------------------------------------------------
     CURRENTLY LEARNING
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'currently learning',
        'what is he learning',
        'learning now',
        'currently working',
        'current focus',
        'what is he currently doing',
      ]),

    respond: () => ({
      text:
        `Anuj is currently **${currentlyLearning.currently}**.\n\n` +
        `His current focus areas include:\n` +
        currentlyLearning.areas
          .map((area) => `• ${area}`)
          .join('\n'),

      sources: [sources.about],

      links: [
        {
          label: 'Explore Projects',
          href: '#projects',
        },
        {
          label: 'View Skills',
          href: '#skills',
        },
      ],
    }),
  },

  /* -------------------------------------------------------
     WHAT CAN HE BUILD
  ------------------------------------------------------- */

  {
    match: (query) => {
      const q = lower(query);

      return (
        q.includes('what can') &&
        (q.includes('build') || q.includes('do'))
      );
    },

    respond: () => ({
      text:
        `Anuj can build:\n\n` +
        `• **Full-stack web applications** — React/TypeScript frontends with FastAPI and other backend services\n` +
        `• **AI-powered applications** — AI assistants, ML features, computer vision, OCR, and intelligent workflows\n` +
        `• **GenAI systems** — LLM integrations, RAG, AI agents, and automation workflows\n` +
        `• **Backend systems** — REST APIs, authentication, database-backed applications, and application architecture\n` +
        `• **Data-driven products** — financial dashboards, analytics platforms, and prediction systems\n` +
        `• **Embedded systems** — STM32 firmware and hardware-level control systems\n\n` +
        `His experience spans from product UI and APIs to databases, AI systems, deployment, and embedded engineering.`,

      sources: [
        sources.projects,
        sources.skills,
        sources.experience,
      ],

      links: [
        {
          label: 'Explore Projects',
          href: '#projects',
        },
        {
          label: 'View Experience',
          href: '#experience',
        },
      ],
    }),
  },

  /* -------------------------------------------------------
     ROLES
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'what role',
        'which roles',
        'roles suit',
        'what position',
        'job fit',
        'role fit',
        'hire him',
      ]),

    respond: () => ({
      text:
        `Based on his portfolio and hands-on experience, Anuj could fit roles such as:\n\n` +
        `• **Full Stack Developer** — React, TypeScript, FastAPI, PostgreSQL\n` +
        `• **Backend Developer** — Python, FastAPI, REST APIs, PostgreSQL\n` +
        `• **AI/ML Developer** — Machine Learning, OpenCV, OCR, AI systems\n` +
        `• **GenAI Developer** — LLMs, RAG, AI agents, Ollama, n8n\n` +
        `• **AI Automation Developer** — AI tools, LLM workflows, automation\n` +
        `• **Frontend Developer** — React, TypeScript, Tailwind CSS\n\n` +
        `His strongest profile is at the intersection of **full-stack engineering and AI**.`,

      sources: [
        sources.skills,
        sources.projects,
        sources.experience,
      ],

      links: [
        {
          label: 'See Projects',
          href: '#projects',
        },
        {
          label: 'See Experience',
          href: '#experience',
        },
        {
          label: 'Contact Anuj',
          href: '#contact',
        },
      ],
    }),
  },

  /* -------------------------------------------------------
     EDUCATION
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'education',
        'degree',
        'university',
        'college',
        'study',
        'academic background',
      ]),

    respond: () => ({
      text:
        `Anuj's academic background is in **${education.degree}**.\n\n` +
        `Relevant areas include **${education.relevantAreas.join(', ')}**.`,

      sources: [sources.about],

      links: [
        {
          label: 'View Skills',
          href: '#skills',
        },
      ],
    }),
  },

  /* -------------------------------------------------------
     CONTACT
  ------------------------------------------------------- */

  {
    match: (query) =>
      containsAny(query, [
        'contact',
        'reach',
        'email',
        'connect',
        'hire',
        'linkedin',
        'github',
      ]),

    respond: () => ({
      text:
        `You can reach Anuj through the Contact section or connect through his GitHub, LinkedIn, or email.\n\n` +
        `He's open to roles, collaborations, internships, and projects across **full-stack development, backend engineering, AI/ML, and GenAI**.`,

      sources: [sources.contact],

      links: [
        {
          label: 'Contact Anuj',
          href: '#contact',
        },
      ],
    }),
  },

  /* -------------------------------------------------------
     SPECIFIC SKILL
  ------------------------------------------------------- */

  {
    match: (query) => {
      const skill = findSkill(query);

      return skill !== null;
    },

    respond: (query) => {
      const skill = findSkill(query)!;

      const matchingProjects = Object.values(
        projectDetails,
      ).filter((project) =>
        project.technologies.some(
          (technology) =>
            lower(technology).includes(lower(skill)) ||
            lower(skill).includes(lower(technology)),
        ),
      );

      const matchingExperience = experiences.filter(
        (experience) =>
          experience.technologies.some(
            (technology) =>
              lower(technology).includes(lower(skill)) ||
              lower(skill).includes(lower(technology)),
          ),
      );

      let text =
        `Anuj works with **${skill}**.`;

      if (matchingProjects.length > 0) {
        text +=
          `\n\n**Projects:** ${matchingProjects
            .map((project) => project.name)
            .join(', ')}`;
      }

      if (matchingExperience.length > 0) {
        text +=
          `\n\n**Experience:** ${matchingExperience
            .map(
              (experience) =>
                `${experience.organization} — ${experience.role}`,
            )
            .join(', ')}`;
      }

      return {
        text,

        sources: [
          sources.skills,
          ...(matchingExperience.length > 0
            ? [sources.experience]
            : []),
        ],

        links: [
          {
            label: 'View Skills',
            href: '#skills',
          },
          ...(matchingProjects.length > 0
            ? [
                {
                  label: 'Explore Projects',
                  href: '#projects',
                },
              ]
            : []),
          ...(matchingExperience.length > 0
            ? [
                {
                  label: 'View Experience',
                  href: '#experience',
                },
              ]
            : []),
        ],
      };
    },
  },
];

/* =========================================================
   COMMAND SHORTCUTS
========================================================= */

const commandMap: Record<
  string,
  () => ArcResponse
> = {
  /* Projects */

  '/projects': () => ({
    text:
      `Anuj's selected projects:\n\n` +
      Object.values(projectDetails)
        .map(
          (project) =>
            `**${project.name}** — ${project.description}`,
        )
        .join('\n\n'),

    sources: [sources.projects],

    links: Object.values(projectDetails).map(
      (project) => ({
        label: `Explore ${project.name}`,
        href: `arc:project:${project.id}`,
      }),
    ),
  }),

  /* Skills */

  '/skills': () => ({
    text: skillCategories
      .map(
        (category) =>
          `**${category.title}:** ${category.items.join(', ')}`,
      )
      .join('\n'),

    sources: [sources.skills],

    links: [
      {
        label: 'View Skills',
        href: '#skills',
      },
    ],
  }),

  /* Experience */

  '/experience': () => ({
    text:
      `Anuj's experience:\n\n` +
      experiences
        .map(
          (experience) =>
            `**${experience.organization}** — ${experience.role} (${experience.period})\n${experience.description}`,
        )
        .join('\n\n'),

    sources: [sources.experience],

    links: experiences.map((experience) => ({
      label: `View ${experience.organization}`,
      href: `arc:experience:${experience.id}`,
    })),
  }),

  /* About */

  '/about': () => ({
    text:
      `**${profile.name}** — ${profile.role}, ${profile.location}.\n\n` +
      `${profile.bio}`,

    sources: [sources.about],

    links: [
      {
        label: 'About',
        href: '#about',
      },
    ],
  }),

  /* Resume */

  '/resume': () => {
    const frontend = getSkillsByCategory('Frontend');
    const backend = getSkillsByCategory('Backend');
    const database = getSkillsByCategory('Database');
    const aiMl = getSkillsByCategory('AI / ML');
    const genAi = getSkillsByCategory(
      'GenAI & LLMs',
    );

    return {
      text:
        `### ${profile.name}\n` +
        `${profile.role} · ${profile.location}\n\n` +
        `${profile.bio}\n\n` +

        `### Skills\n` +
        `**Frontend:** ${frontend.join(', ')}\n` +
        `**Backend:** ${backend.join(', ')}\n` +
        `**Databases:** ${database.join(', ')}\n` +
        `**AI/ML:** ${aiMl.join(', ')}\n` +
        `**GenAI:** ${genAi.join(', ')}\n\n` +

        `### Experience\n` +
        experiences
          .map(
            (experience) =>
              `**${experience.organization}** — ${experience.role}`,
          )
          .join('\n') +
        `\n\n### Projects\n` +
        Object.values(projectDetails)
          .map(
            (project) =>
              `**${project.name}** — ${project.technologies.join(', ')}`,
          )
          .join('\n'),

      sources: [
        sources.about,
        sources.skills,
        sources.experience,
        sources.projects,
      ],

      links: [
        {
          label: 'Contact Anuj',
          href: '#contact',
        },
      ],
    };
  },

  /* Contact */

  '/contact': () => ({
    text:
      `You can reach Anuj through the Contact section, or through GitHub, LinkedIn, or email.`,

    sources: [sources.contact],

    links: [
      {
        label: 'Contact Anuj',
        href: '#contact',
      },
    ],
  }),

  /* GitHub */

  '/github': () => ({
    text:
      `You can find Anuj's GitHub through the social links in the portfolio.`,

    sources: [],

    links: [
      {
        label: 'GitHub',
        href: 'https://github.com',
      },
    ],
  }),
};

/* =========================================================
   MAIN ARC RESPONSE ENGINE
========================================================= */

export function generateArcResponse(
  query: string,
): ArcResponse {
  const trimmed = query.trim();

  if (!trimmed) {
    return {
      text:
        `I'm ARC. Ask me about Anuj's **projects, skills, experience, architecture, AI work, or technical background**.`,

      sources: [],

      links: [
        {
          label: 'View Projects',
          href: 'arc:projects',
        },
        {
          label: 'View Skills',
          href: 'arc:skills',
        },
        {
          label: 'View Experience',
          href: 'arc:experience',
        },
      ],
    };
  }

  /* -------------------------------------------------------
     Commands
  ------------------------------------------------------- */

  if (trimmed.startsWith('/')) {
    const command = commandMap[trimmed.toLowerCase()];

    if (command) {
      return command();
    }
  }

  const q = lower(trimmed);

  /* -------------------------------------------------------
     Internal ARC links
  ------------------------------------------------------- */

  if (q === 'arc:projects') {
    return commandMap['/projects']();
  }

  if (q === 'arc:skills') {
    return commandMap['/skills']();
  }

  if (q === 'arc:experience') {
    return commandMap['/experience']();
  }

  if (q === 'arc:background') {
    return commandMap['/skills']();
  }

  if (q === 'arc:building') {
    return {
      text:
        `Anuj is currently **${currentlyLearning.currently}**.\n\n` +
        `Focus areas:\n` +
        currentlyLearning.areas
          .map((area) => `• ${area}`)
          .join('\n'),

      sources: [sources.about],

      links: [
        {
          label: 'Explore Projects',
          href: '#projects',
        },
      ],
    };
  }

  /* -------------------------------------------------------
     Specific project trigger
  ------------------------------------------------------- */

  if (q.startsWith('arc:project:')) {
    const id = q.replace('arc:project:', '');
    const project = getProjectDetail(id);

    if (project) {
      return {
        text:
          `You're looking at **${project.name}**.\n\n` +
          `${project.description}\n\n` +
          `**Stack:** ${project.technologies.join(' · ')}\n\n` +
          `**Architecture:** ${project.architecture}`,

        sources: [
          {
            label: project.name,
            href: '#projects',
          },
        ],

        links: [
          {
            label: `Explore ${project.name}`,
            href: '#projects',
          },
        ],
      };
    }
  }

  /* -------------------------------------------------------
     Specific experience trigger
  ------------------------------------------------------- */

  if (q.startsWith('arc:experience:')) {
    const id = q.replace('arc:experience:', '');

    const experience = experiences.find(
      (item) => item.id === id,
    );

    if (experience) {
      return {
        text:
          `**${experience.organization}**\n\n` +
          `**Role:** ${experience.role}\n` +
          `**Period:** ${experience.period}\n\n` +
          `${experience.description}\n\n` +
          `**Contributions:**\n` +
          experience.highlights
            .map((item) => `• ${item}`)
            .join('\n') +
          `\n\n**Technologies:** ${experience.technologies.join(
            ' · ',
          )}`,

        sources: [sources.experience],

        links: [
          {
            label: 'View Experience',
            href: '#experience',
          },
        ],
      };
    }
  }

  /* -------------------------------------------------------
     Try all intents
  ------------------------------------------------------- */

  for (const intent of intents) {
    if (intent.match(trimmed)) {
      return intent.respond(trimmed);
    }
  }

  /* -------------------------------------------------------
     Project search fallback
  ------------------------------------------------------- */

  const project = findProject(trimmed);

  if (project) {
    return {
      text:
        `**${project.name}**\n\n` +
        `${project.description}\n\n` +
        `**Stack:** ${project.technologies.join(' · ')}`,

      sources: [sources.projects],

      links: [
        {
          label: `Explore ${project.name}`,
          href: '#projects',
        },
      ],
    };
  }

  return noInfo;
}

/* =========================================================
   ARC UI CONTENT
========================================================= */

export const arcInitialMessage =
  `Hey. I'm ARC.\n\n` +
  `I know the work behind this portfolio — not just the list of technologies.\n\n` +
  `Ask me about Anuj's projects, experience, skills, AI work, or how something was built.`;

export const arcSignature =
  `I know the work. You ask the questions.`;

export const suggestedQuestions = [
  'Who is Anuj?',
  'What has he built?',
  'Tell me about Sthero.',
  'What did he do at DRDO?',
  'Tell me about Sakhi.',
  'What does he work with?',
  'What GenAI tools does he use?',
  'What is his technical background?',
];

export const recruiterQuestions = [
  'Give me a 30-second candidate overview.',
  "What are Anuj's strongest technical skills?",
  'Which roles could suit him?',
  'What experience does he have?',
  'What has he actually built?',
  'Show me his AI and GenAI work.',
  'Tell me about his full-stack experience.',
];

export const developerQuestions = [
  'How was FinPilot built?',
  'How was Sthero built?',
  'Tell me about the Sthero architecture.',
  'Tell me about Sakhi.',
  'What did Anuj build at DRDO?',
  'What backend technologies does he use?',
  'What GenAI technologies does he know?',
  'Does he work with RAG and LLMs?',
  'What deployment technologies does he use?',
  'What databases does he work with?',
];
