
export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  previewType: 'finpilot' | 'sakhi' | 'trader-expert';
  caseStudyUrl: string;
}

export interface ProjectDetail {
  id: string;
  name: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  aiMl: string[];
  architecture: string;
  challenges: string[];
  currentStatus: string;
  futureImprovements: string[];
  github: string;
  caseStudy: string;
}

export const projects: Project[] = [
  {
    id: 'finpilot',
    number: '01',
    title: 'FinPilot',
    description:
      'An AI-powered personal finance platform designed to help users understand expenses, monitor financial health and make better financial decisions.',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    previewType: 'finpilot',
    caseStudyUrl: '#',
  },
  {
  id: 'sakhi',
  number: '02',
  title: 'Sakhi (सखी)',
  description:
    'A health and safety companion for women combining AI-powered wellness assistance, menstrual cycle tracking, educational resources, community storytelling, and local medical discovery.',
  tags: ['React', 'TypeScript', 'FastAPI', 'AI/ML'],
  previewType: 'sakhi',
  caseStudyUrl:
    'https://github.com/Anuj-165/Sakhi---Your-Health-Safety-Companion',
},
{
  id: 'trader-expert',
  number: '03',
  title: 'Trader Expert',
  description:
    'A stock-market analysis platform combining financial data, analytics and AI-assisted insights.',
  tags: ['Next.js', 'Python', 'MongoDB', 'AI/ML'],
  previewType: 'trader-expert',
  caseStudyUrl: 'https://github.com/Anuj-165/TradeXpert',
},
];

export const projectDetails: Record<string, ProjectDetail> = {
  finpilot: {
    id: 'finpilot',
    name: 'FinPilot',
    description:
      'An AI-powered personal finance platform designed to help users understand expenses, monitor financial health and make better financial decisions.',
    problem:
      'Personal finance is complex. Most people struggle to understand their spending patterns, monitor financial health, and make informed decisions about their money.',
    solution:
      'A full-stack web application that provides a financial health score, tracks income and expenses, predicts future spending using AI, and presents everything through an intuitive dashboard.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    frontend: ['React', 'TypeScript'],
    backend: ['FastAPI', 'REST APIs'],
    database: ['PostgreSQL'],
    aiMl: ['AI-powered expense prediction', 'Financial health scoring'],
    architecture:
      'React frontend communicates with a FastAPI backend via REST APIs. PostgreSQL stores transaction data and user financial records. AI components handle expense prediction and financial health scoring.',
    challenges: [
      'Designing a financial health score that is meaningful and easy to understand',
      'Building reliable expense prediction models',
      'Creating a dashboard that presents complex financial data intuitively',
    ],
    currentStatus: 'Currently being built — actively in development.',
    futureImprovements: [
      'More sophisticated AI prediction models',
      'Budgeting and goal-tracking features',
      'Bank account integration',
    ],
    github: '#',
    caseStudy: '#',
  },

  sakhi: {
    id: 'sakhi',
    name: 'Sakhi (सखी)',
    description:
      'A dedicated wellness and safety platform designed specifically for women. Sakhi combines AI-driven health assistance, menstrual cycle tracking, educational resources, community storytelling, and medical discovery into one calm and accessible experience.',

    problem:
      'Women often need to navigate multiple disconnected platforms for health questions, menstrual tracking, educational resources, and safety-related information. Sakhi addresses this fragmentation by bringing essential wellness and safety experiences together in one platform.',

    solution:
      'Sakhi provides an AI health companion for questions about reproductive health, hygiene, and general wellness, alongside menstrual cycle tracking, symptom logging, educational content, community storytelling, and location-based discovery of nearby pharmacies and medical stores.',

    technologies: [
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Heroicons',
      'Axios',
      'FastAPI',
      'Python',
      'SQLAlchemy',
      'JWT',
    ],

    frontend: [
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Heroicons',
      'Axios',
    ],

    backend: [
      'FastAPI',
      'Python',
      'SQLAlchemy',
      'JWT Authentication',
      'REST APIs',
    ],

    database: [
      'SQLAlchemy ORM',
      'User profiles',
      'Health and wellness data',
      'Menstrual cycle records',
    ],

    aiMl: [
      'AI Health Assistant',
      'Natural-language health queries',
      'Wellness assistance',
      'Conversational AI interaction',
    ],

    architecture:
      'Sakhi uses a React and TypeScript frontend styled with Tailwind CSS and animated with Framer Motion. Axios communicates with a FastAPI backend through REST APIs. JWT authentication protects user-specific functionality, while SQLAlchemy manages persistent application data. The platform combines the AI health assistant, cycle tracking, educational resources, community experiences, and location-based medical discovery into a unified application.',

    challenges: [
      'Designing a health-focused interface that feels calm, approachable, and empowering',
      'Creating a conversational AI assistant that feels like a supportive companion rather than a traditional chatbot',
      'Building an intuitive menstrual tracking experience for cycle and symptom logging',
      'Protecting authenticated user information with secure JWT-based authentication',
      'Combining health, education, community, and safety features without overwhelming the user',
      'Creating smooth bot animations and voice-state visual feedback while maintaining a responsive interface',
    ],

    currentStatus:
      'Built as a functional full-stack wellness and safety platform with AI-assisted health interaction, authentication, menstrual cycle tracking, educational resources, community storytelling, and medical-store discovery.',

    futureImprovements: [
      'Safe Mode to quickly hide sensitive health information',
      'Emergency safety alerts and trusted-contact workflows',
      'Mouth synchronization for the Sakhi bot with AI text-to-speech',
      'Personalized wellness recommendations based on cycle history',
      'NGO Connect for women-support organizations',
      'Emergency helpline integration',
      'Expanded health education resources',
      'More advanced conversational AI capabilities',
    ],

    github: 'https://github.com/Anuj-165/Sakhi---Your-Health-Safety-Companion.git',
    caseStudy: 'https://github.com/Anuj-165/Sakhi---Your-Health-Safety-Companion.git',
  },

  'trader-expert': {
    id: 'trader-expert',
    name: 'Trader Expert',
    description:
      'A stock-market analysis platform combining financial data, analytics and AI-assisted insights.',
    problem:
      'Stock market analysis is overwhelming. Investors need a platform that combines real-time data, technical indicators, and AI insights in one place.',
    solution:
      'A web platform that aggregates financial data, provides interactive charts and market indicators, maintains a watchlist, and offers AI-assisted insights to help investors make informed decisions.',
    technologies: ['Next.js', 'Python', 'MongoDB', 'AI/ML'],
    frontend: ['Next.js'],
    backend: ['Python'],
    database: ['MongoDB'],
    aiMl: [
      'AI-assisted market insights',
      'Trend analysis',
      'RSI and indicator interpretation',
    ],
    architecture:
      'Next.js frontend provides SSR pages with interactive charts and watchlist. Python backend handles data processing and AI insight generation. MongoDB stores market data and user watchlists.',
    challenges: [
      'Integrating real-time financial data feeds',
      'Building AI insight generation that is genuinely useful, not just decorative',
      'Creating responsive financial charts that handle large datasets',
    ],
    currentStatus: 'Built and functional.',
    futureImprovements: [
      'Portfolio tracking and management',
      'Real-time alerts and notifications',
      'More sophisticated AI prediction models',
    ],
    github: 'https://github.com/Anuj-165/TradeXpert.git',
    caseStudy: 'https://github.com/Anuj-165/TradeXpert.git',
  },
};

export function getProjectDetail(id: string): ProjectDetail | null {
  return projectDetails[id] ?? null;
}

export function findProject(query: string): ProjectDetail | null {
  const q = query.toLowerCase().trim();

  for (const detail of Object.values(projectDetails)) {
    if (
      detail.name.toLowerCase().includes(q) ||
      q.includes(detail.name.toLowerCase())
    ) {
      return detail;
    }
  }

  return null;
}
