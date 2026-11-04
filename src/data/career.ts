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
  highlights?: Record<Lang, string[]>;
  /** Shorter list for the home page; the CV uses the full `highlights`. */
  homeHighlights?: Record<Lang, string[]>;
}

export const career: CareerEntry[] = [
  {
    period: { en: '2021 – 2023', es: '2021 – 2023' },
    title: {
      en: 'Higher Vocational Diploma (Técnico Superior), Web Application Development',
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
    title: { en: 'Software engineer, internship', es: 'Ingeniero de software, prácticas' },
    org: 'HYVE',
    place: 'Las Palmas de Gran Canaria, ES',
    kind: 'internship',
    start: '2023-03',
    end: '2023-06',
    highlights: {
      en: [
        'Built responsive web applications with React, TypeScript, HTML and CSS.',
        'Worked in a Scrum team with Jira, including quality assurance: documented processes and reported bugs.',
      ],
      es: [
        'Desarrollo de aplicaciones web responsivas con React, TypeScript, HTML y CSS.',
        'Trabajo en un equipo Scrum con Jira, incluido el control de calidad: documentación de procesos e informe de errores.',
      ],
    },
  },
  {
    period: { en: 'Jul – Sep 2023', es: 'jul – sep 2023' },
    title: { en: 'Software engineer, internship', es: 'Ingeniero de software, prácticas' },
    org: 'HYVE',
    place: 'Munich, DE',
    kind: 'internship',
    start: '2023-07',
    end: '2023-09',
    highlights: {
      en: [
        'Software for Raspberry Pi devices, using several APIs for data exchange between applications.',
        'Cross-platform mobile development with React Native and TypeScript, with unit tests in Jest.',
        'First steps with Docker for containerised deployment.',
      ],
      es: [
        'Software para dispositivos Raspberry Pi, usando varias APIs para intercambiar datos entre aplicaciones.',
        'Desarrollo móvil multiplataforma con React Native y TypeScript, con pruebas unitarias en Jest.',
        'Primeros pasos con Docker para el despliegue en contenedores.',
      ],
    },
  },
  {
    period: { en: 'Mar – Jun 2024', es: 'mar – jun 2024' },
    title: { en: 'Software engineer, internship', es: 'Ingeniero de software, prácticas' },
    org: 'OVAN GmbH',
    place: 'Berlin, DE',
    kind: 'internship',
    start: '2024-03',
    end: '2024-06',
    highlights: {
      en: [
        'Built custom web portals with TYPO3 CMS, with React applications inside TYPO3 extensions.',
        'Developed Laravel back ends and data structures to support the React applications.',
        'Designed entity-relationship models for several databases.',
        'Debugged and optimised existing solutions in TYPO3 and React.',
      ],
      es: [
        'Portales web a medida con TYPO3 CMS, con aplicaciones React dentro de extensiones de TYPO3.',
        'Back ends y estructuras de datos con Laravel para respaldar las aplicaciones React.',
        'Diseño de modelos entidad-relación para varias bases de datos.',
        'Depuración y optimización de soluciones existentes en TYPO3 y React.',
      ],
    },
  },
  {
    period: { en: 'Oct 2024 – present', es: 'oct 2024 – actualidad' },
    title: { en: 'Full-stack software engineer', es: 'Ingeniero de software full-stack' },
    org: 'Grupo ARI',
    place: 'Las Palmas de Gran Canaria, ES',
    kind: 'job',
    start: '2024-10',
    end: '2026-10',
    summary: {
      en: 'Builds and maintains an enterprise ERP platform for the automotive sector with Laravel and JavaScript: workshop, sales, billing and document management, plus integrations with manufacturer systems. Also optimises how the development team works with AI coding tools.',
      es: 'Desarrolla y mantiene una plataforma ERP empresarial del sector automoción con Laravel y JavaScript: taller, ventas, facturación y gestión documental, además de integraciones con sistemas de fabricantes. También optimiza cómo trabaja el equipo de desarrollo con herramientas de IA.',
    },
    highlights: {
      en: [
        'Designed a real-time integration with a manufacturer WebSocket API: a presence layer (heartbeats, TTL cache, private broadcast channels) that stops external updates from overwriting a repair order while a user has it open, with functional error codes and manual replay.',
        'Built several manufacturer integrations on a shared base (parts, warranty, intervention lists, symptom codes), covered by mappers, fixtures and merge-scenario tests.',
        'Automated vehicle catalogue ingestion over SFTP: asynchronous processing, versioned schema validation, quarantine of corrupt batches and idempotent updates.',
        'Migrated the scheduling views from a commercial library to FullCalendar Resource Timeline and built the mechanics and bodywork planners, a TV display and virtual appointments; merged two parallel appointment models into one with a single-command data migration.',
        'Built the testing foundation of the workshop module (base test case, factories, API mocks, enum and mapper tests) and the error handling and audit layer: Laravel 11 error handler, deduplicated error tracker and model change logging.',
        'Queue-based billing and accounting, granular authorisation, separate web and API guards, and audit trails; fixed front-end security vulnerabilities and added anti-bot protection on login.',
        'Optimised AI-assisted development: project-specific instruction files, hooks and skills, model choice per task, token usage tracking, a review checklist for generated code and automated user guides. The whole development team adopted the workflow, and I ship more than ten tickets a week within the limits of a standard subscription.',
      ],
      es: [
        'Diseño de una integración en tiempo real con la API WebSocket de un fabricante: capa de presencia (heartbeats, caché con TTL, canales privados) que evita que actualizaciones externas sobrescriban una orden de reparación abierta por un usuario, con códigos de error funcionales y reenvío manual.',
        'Varias integraciones con fabricantes sobre una base común (recambios, garantías, listas de intervenciones, códigos de síntomas), cubiertas con mappers, fixtures y tests de escenarios de merge.',
        'Ingestión automatizada de un catálogo de vehículos por SFTP: procesamiento asíncrono, validación de esquema versionada, cuarentena de lotes corruptos y actualizaciones idempotentes.',
        'Migración de las vistas de planificación de una librería comercial a FullCalendar Resource Timeline y creación de los planificadores de mecánica y carrocería, una vista TV y citas virtuales; unificación de dos modelos de citas en uno con migración de datos en un solo comando.',
        'Base de testing del módulo de taller (test base, factories, mocks de API, tests de enums y mappers) y capa de errores y auditoría: manejador de errores de Laravel 11, registro de errores con deduplicación y registro de cambios de modelos.',
        'Facturación y contabilidad con colas, autorización granular, guards separados para web y API y trazas de auditoría; corrección de vulnerabilidades de seguridad en el front y protección anti-bot en el login.',
        'Optimización del desarrollo asistido por IA: archivos de instrucciones, hooks y skills específicos del proyecto, elección de modelo por tarea, medición del consumo de tokens, checklist de revisión del código generado y manuales de uso automatizados. Todo el equipo de desarrollo adoptó el flujo y yo cierro más de diez tarjetas por semana dentro de los límites de una suscripción estándar.',
      ],
    },
    homeHighlights: {
      en: [
        'Real-time integration with a manufacturer WebSocket API: presence layer that stops external updates from overwriting orders in use.',
        'Manufacturer integrations on a shared base, vehicle catalogue ingestion over SFTP, and a scheduler migration with new workshop planners.',
        'Testing foundation, error handling and audit layer for the workshop module.',
        'Optimised AI-assisted development for the team: shared instructions, hooks, model choice per task and token tracking.',
      ],
      es: [
        'Integración en tiempo real con la API WebSocket de un fabricante: capa de presencia que evita que actualizaciones externas sobrescriban órdenes en uso.',
        'Integraciones con fabricantes sobre una base común, ingestión de un catálogo por SFTP y migración del planificador con nuevos planificadores de taller.',
        'Base de testing, manejo de errores y capa de auditoría del módulo de taller.',
        'Optimización del desarrollo asistido por IA del equipo: instrucciones compartidas, hooks, modelo por tarea y control de tokens.',
      ],
    },
  },
];
