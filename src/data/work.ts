import type { Lang } from '../i18n/ui';

export type Status = 'shipped' | 'wip' | 'draft';
type Text = Record<Lang, string>;

export interface WorkItem {
  slug: string;
  title: Text;
  summary: Text;
  status: Status;
  stack: string[];
  href?: string;
}

export const work: WorkItem[] = [
  {
    slug: 'erp-data-operations',
    title: {
      en: 'Data and operations engineering in a vertical ERP',
      es: 'Ingeniería de datos y operaciones en un ERP vertical',
    },
    summary: {
      en: 'Ingestion by SFTP, idempotent queue processing, external integrations and granular access control.',
      es: 'Ingestión por SFTP, procesamiento idempotente con colas, integraciones externas y control de acceso granular.',
    },
    status: 'draft',
    stack: ['Laravel', 'PHP', 'Redis', 'MySQL'],
  },
  {
    slug: 'automation-platform',
    title: { en: 'Personal automation platform', es: 'Plataforma de automatización personal' },
    summary: {
      en: 'Scheduled workflows that tag reminders, protect focus time and send weekly reviews, run locally.',
      es: 'Flujos programados que etiquetan recordatorios, protegen el tiempo de foco y envían revisiones semanales, en local.',
    },
    status: 'draft',
    stack: ['n8n', 'launchd', 'Node.js'],
  },
  {
    slug: 'non-sleep',
    title: { en: 'Non-Sleep', es: 'Non-Sleep' },
    summary: {
      en: 'macOS menu bar app that keeps the Mac awake for a timed session and stops itself on low battery or heat.',
      es: 'App de barra de menús de macOS que mantiene el Mac despierto durante una sesión y se detiene sola con batería baja o calor.',
    },
    status: 'shipped',
    stack: ['Swift', 'SwiftUI', 'IOKit'],
    href: 'https://github.com/juansuarezdev/non-sleep',
  },
  {
    slug: 'supported-employment-portal',
    title: {
      en: 'Web and transparency portal for a supported-employment company',
      es: 'Web y portal de transparencia para una empresa de empleo protegido',
    },
    summary: {
      en: 'Public site, document portal and admin panel.',
      es: 'Web pública, portal de documentos y panel de administración.',
    },
    status: 'wip',
    stack: ['Laravel', 'SQLite'],
  },
];

export const moreWork = [
  { name: 'Beast', href: 'https://github.com/juansuarezdev/beast' },
  { name: 'hevy.routines', href: 'https://github.com/juansuarezdev/hevy.routines' },
];
