export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'Tailwind CSS',
      'HTML / CSS',
      'Framer Motion',
    ],
  },

  {
    title: 'Backend',
    items: [
      'Python',
      'FastAPI',
      'Node.js',
      'Express',
      'REST APIs',
      'JWT Authentication',
      'SQLAlchemy',
    ],
  },

  {
    title: 'Database',
    items: [
      'PostgreSQL',
      'Supabase',
      'MongoDB',
      'SQLite',
    ],
  },

  {
    title: 'AI / ML',
    items: [
      'Machine Learning',
      'TensorFlow',
      'OpenCV',
      'OCR',
      'Computer Vision',
      'Data Analytics',
    ],
  },

  {
    title: 'GenAI & LLMs',
    items: [
      'Generative AI',
      'LLMs',
      'RAG',
      'AI Agents',
      'Prompt Engineering',
      'LLM Integration',
      'Ollama',
      'n8n',
    ],
  },

  {
    title: 'AI Tools',
    items: [
      'ChatGPT',
      'Claude',
      'Gemini',
      'GitHub Copilot',
      'Bolt',
    ],
  },

  {
    title: 'Deployment',
    items: [
      'Vercel',
      'Render',
      'Railway',
    ],
  },

  {
    title: 'CI / CD',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'GitHub Actions',
    ],
  },

  {
    title: 'Tools',
    items: [
      'VS Code',
      'Postman',
      'Figma',
    ],
  },
];

export const allSkills = skillCategories.flatMap(
  (category) => category.items,
);

export function getSkillsByCategory(category: string): string[] {
  const cat = skillCategories.find(
    (item) =>
      item.title.toLowerCase() === category.toLowerCase(),
  );

  return cat ? cat.items : [];
}

export function findSkill(query: string): string | null {
  const q = query.toLowerCase().trim();

  for (const item of allSkills) {
    if (
      item.toLowerCase().includes(q) ||
      q.includes(item.toLowerCase())
    ) {
      return item;
    }
  }

  return null;
}