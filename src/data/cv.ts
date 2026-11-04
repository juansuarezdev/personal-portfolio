import type { Lang } from '../i18n/ui';

type Text = Record<Lang, string>;

export const contact = {
  email: 'juansuarezdev@gmail.com',
  github: 'https://github.com/juansuarezdev',
  linkedin: 'https://www.linkedin.com/in/juansuarez-sanchez/',
  location: { en: 'Las Palmas de Gran Canaria, Spain', es: 'Las Palmas de Gran Canaria, España' } as Text,
};

export const role: Text = { en: 'Full-stack & AI engineer · Laravel, JavaScript, LLM tooling', es: 'Ingeniero full-stack e IA · Laravel, JavaScript, tooling con LLM' };

export const summary: Text = {
  en: 'Full-stack software engineer with two years on an enterprise ERP platform for the automotive sector, building reliable Laravel back ends: asynchronous processing, third-party integrations and billing workflows. I work daily with agentic coding tools (Claude Code, OpenCode) and build my own AI tooling: an MCP server that delegates tasks to local models, a CLI where an LLM proposes diffs that git and tests validate, and an agent task inbox for a self-hosted project manager. Internships in Munich and Berlin.',
  es: 'Ingeniero de software full-stack con dos años en una plataforma ERP empresarial del sector automoción, construyendo back ends fiables con Laravel: procesamiento asíncrono, integraciones con terceros y facturación. Trabajo a diario con herramientas de programación con agentes (Claude Code, OpenCode) y desarrollo mi propio tooling de IA: un servidor MCP que delega tareas en modelos locales, una CLI donde un LLM propone diffs que validan git y los tests, y una bandeja de tareas para agentes en un gestor de proyectos autoalojado. Prácticas en Múnich y Berlín.',
};

export const skills: { group: Text; items: string[] }[] = [
  { group: { en: 'Backend', es: 'Backend' }, items: ['PHP', 'Laravel', 'REST APIs', 'OAuth2 (Passport)', 'Queues (Redis, Horizon)', 'MySQL', 'PostgreSQL', 'TYPO3 CMS'] },
  { group: { en: 'Frontend', es: 'Frontend' }, items: ['JavaScript (ES6+)', 'TypeScript', 'React', 'React Native', 'Bootstrap', 'Vite'] },
  { group: { en: 'AI and agents', es: 'IA y agentes' }, items: ['Claude Code', 'OpenCode', 'MCP servers', 'LLM APIs', 'Local LLMs', 'n8n', 'Agent workflow design'] },
  { group: { en: 'Quality and tools', es: 'Calidad y herramientas' }, items: ['PHPUnit', 'Jest', 'Git', 'Docker', 'SFTP', 'Jira', 'Scrum'] },
  { group: { en: 'Scripting and native', es: 'Scripting y nativo' }, items: ['Python', 'Node.js', 'Swift', 'SwiftUI'] },
];

export const languages: { name: Text; level: Text }[] = [
  { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
  { name: { en: 'English', es: 'Inglés' }, level: { en: 'Bilingual proficiency', es: 'Nivel bilingüe' } },
  { name: { en: 'French', es: 'Francés' }, level: { en: 'Elementary', es: 'Elemental' } },
];

export const projects: { name: string; href?: string; text: Text }[] = [
  {
    name: 'TaskView (fork)',
    href: 'github.com/juansuarezdev/taskview',
    text: {
      en: 'Fork of TaskView Community, a self-hosted project manager (source-available). I added an AI task inbox with agent dispatch, tag packs, a per-task history showing who changed what (web, AI or API) and weekly review stats. Runs on my own server and organises my personal projects with coding agents.',
      es: 'Fork de TaskView Community, un gestor de proyectos autoalojado (código disponible). Añadí una bandeja de tareas para IA con envío a agentes, paquetes de etiquetas, un historial por tarea que indica quién cambió qué (web, IA o API) y estadísticas de revisión semanal. Funciona en mi propio servidor y organiza mis proyectos personales con agentes de código.',
    },
  },
  {
    name: 'Portfolio',
    href: 'juansuarezdev.github.io/personal-portfolio',
    text: {
      en: 'This bilingual site (EN/ES): Astro and TypeScript, static, with a CV printable to PDF, accessible and fast (Lighthouse 100 in accessibility, best practices and SEO). Deployed to GitHub Pages with Actions.',
      es: 'Este sitio bilingüe (EN/ES): Astro y TypeScript, estático, con CV imprimible a PDF, accesible y rápido (Lighthouse 100 en accesibilidad, buenas prácticas y SEO). Desplegado en GitHub Pages con Actions.',
    },
  },
  {
    name: 'Mojo y Limpio (WIP)',
    text: {
      en: 'Web portal for a supported-employment company, in development. Requirements analysis, specification and build.',
      es: 'Portal web para una empresa de empleo protegido, en desarrollo. Análisis de requisitos, especificación y construcción.',
    },
  },
  {
    name: 'Beast',
    href: 'github.com/juansuarezdev/beast',
    text: { en: 'Fork of openGym (AGPL-3.0). Self-hosted gym tracker with Apple Health sync and iOS Live Activities.', es: 'Fork de openGym (AGPL-3.0). Tracker de gimnasio autoalojado con sincronización de Apple Health y Live Activities de iOS.' },
  },
];
