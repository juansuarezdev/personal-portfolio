import type { Lang } from '../i18n/ui';

type Text = Record<Lang, string>;

export interface CareerEntry {
  period: Text;
  title: Text;
  org: string;
  place: string;
  kind: 'education' | 'internship' | 'job';
  start: string;
  end: string;
  summary?: Text;
}

export const career: CareerEntry[] = [
  {
    period: { en: '2021 – 2023', es: '2021 – 2023' },
    title: {
      en: 'Advanced vocational training, Web Application Development',
      es: 'Técnico Superior en Desarrollo de Aplicaciones Web',
    },
    org: 'IES El Rincón',
    place: 'Las Palmas de Gran Canaria, ES',
    kind: 'education',
    start: '2021-09',
    end: '2023-06',
  },
  {
    period: { en: 'Mar – Jun 2023', es: 'mar – jun 2023' },
    title: { en: 'Web developer, internship', es: 'Desarrollador web, prácticas' },
    org: 'HYVE',
    place: 'Las Palmas de Gran Canaria, ES',
    kind: 'internship',
    start: '2023-03',
    end: '2023-06',
  },
  {
    period: { en: 'Jul – Sep 2023', es: 'jul – sep 2023' },
    title: { en: 'Software developer, internship', es: 'Desarrollador de software, prácticas' },
    org: 'HYVE',
    place: 'Munich, DE',
    kind: 'internship',
    start: '2023-07',
    end: '2023-09',
    summary: {
      en: 'Cross-platform mobile with React Native and TypeScript, unit testing with Jest, Docker, and software for Raspberry Pi devices.',
      es: 'Móvil multiplataforma con React Native y TypeScript, pruebas unitarias con Jest, Docker y software para dispositivos Raspberry Pi.',
    },
  },
  {
    period: { en: 'Mar – Jul 2024', es: 'mar – jul 2024' },
    title: { en: 'Software developer, internship', es: 'Desarrollador de software, prácticas' },
    org: 'OVAN GmbH',
    place: 'Berlin, DE',
    kind: 'internship',
    start: '2024-03',
    end: '2024-07',
  },
  {
    period: { en: 'Oct 2024 – present', es: 'oct 2024 – actualidad' },
    title: { en: 'Full-stack developer', es: 'Desarrollador full-stack' },
    org: 'Grupo ARI',
    place: 'Las Palmas de Gran Canaria, ES',
    kind: 'job',
    start: '2024-10',
    end: '2026-10',
    summary: {
      en: 'Laravel and JavaScript on an enterprise platform for the automotive sector: data ingestion, queue-based processing, integrations and access control.',
      es: 'Laravel y JavaScript en una plataforma empresarial del sector automoción: ingestión de datos, procesamiento con colas, integraciones y control de acceso.',
    },
  },
];
