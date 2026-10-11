import type { Lang } from '../i18n/ui';

type Text = Record<Lang, string>;

export const contact = {
  email: 'juansuarezdev@gmail.com',
  github: 'https://github.com/juansuarezdev',
  linkedin: 'https://www.linkedin.com/in/juansuarez-sanchez/',
  location: { en: 'Las Palmas de Gran Canaria, Spain', es: 'Las Palmas de Gran Canaria, España' } as Text,
};

export const role: Text = { en: 'Full-stack developer', es: 'Desarrollador full-stack' };

export const summary: Text = {
  en: 'Full-stack developer working with Laravel and JavaScript. I analyse a business need, specify it, build it in small tested steps and keep it running. Experience on an enterprise platform for the automotive sector, and internships in Munich and Berlin.',
  es: 'Desarrollador full-stack con Laravel y JavaScript. Analizo una necesidad de negocio, la especifico, la construyo en pasos pequeños y probados, y la mantengo funcionando. Experiencia en una plataforma empresarial del sector automoción y prácticas en Múnich y Berlín.',
};

export const skills: { group: Text; items: string[] }[] = [
  { group: { en: 'Backend', es: 'Backend' }, items: ['Laravel', 'PHP', 'TYPO3 CMS', 'MySQL', 'PostgreSQL', 'Redis', 'Horizon', 'Passport (OAuth2)', 'REST APIs', 'SFTP'] },
  { group: { en: 'Frontend', es: 'Frontend' }, items: ['JavaScript (ES6+)', 'Bootstrap', 'Vite', 'jQuery', 'React Native', 'TypeScript'] },
  { group: { en: 'Quality and tools', es: 'Calidad y herramientas' }, items: ['PHPUnit', 'Jest', 'Git', 'Docker', 'Jira', 'Scrum', 'n8n'] },
  { group: { en: 'Native and scripting', es: 'Nativo y scripting' }, items: ['Swift', 'SwiftUI', 'Python', 'Node.js'] },
];

export const languages: { name: Text; level: Text }[] = [
  { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
  { name: { en: 'English', es: 'Inglés' }, level: { en: 'Full professional', es: 'Profesional completo' } },
  { name: { en: 'French', es: 'Francés' }, level: { en: 'Elementary', es: 'Elemental' } },
  { name: { en: 'German', es: 'Alemán' }, level: { en: 'Elementary', es: 'Elemental' } },
];

export const projects: { name: string; href: string; text: Text }[] = [
  {
    name: 'Non-Sleep',
    href: 'github.com/juansuarezdev/non-sleep',
    text: { en: 'macOS menu bar app that keeps the Mac awake for a timed session. Swift, no dependencies.', es: 'App de barra de menús de macOS que mantiene el Mac despierto durante una sesión. Swift, sin dependencias.' },
  },
  {
    name: 'Beast',
    href: 'github.com/juansuarezdev/beast',
    text: { en: 'Self-hosted gym tracker with Apple Health sync and iOS Live Activities. Fork of openGym (AGPL-3.0).', es: 'Tracker de gimnasio autoalojado con sincronización de Apple Health y Live Activities de iOS. Fork de openGym (AGPL-3.0).' },
  },
  {
    name: 'hevy.routines',
    href: 'github.com/juansuarezdev/hevy.routines',
    text: { en: 'Python script that updates training routines in the Hevy app through its API.', es: 'Script en Python que actualiza rutinas de entrenamiento en la app Hevy mediante su API.' },
  },
];
