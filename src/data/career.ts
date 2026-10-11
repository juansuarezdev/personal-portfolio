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
    highlights: {
      en: [
        'Built and designed web applications with HTML, CSS and JavaScript.',
        'Developed responsive web applications with React and TypeScript.',
        'Worked in a team using daily Scrum, with Jira for project management.',
        'Quality assurance in Jira: documented the processes and reported the bugs found.',
      ],
      es: [
        'Desarrollo y diseño de aplicaciones web con HTML, CSS y JavaScript.',
        'Desarrollo de aplicaciones web responsivas con React y TypeScript.',
        'Trabajo en equipo con Scrum diario y Jira para la gestión del proyecto.',
        'Control de calidad en Jira: documentación de los procesos e informe de los errores encontrados.',
      ],
    },
  },
  {
    period: { en: 'Jul – Sep 2023', es: 'jul – sep 2023' },
    title: { en: 'Software developer, internship', es: 'Desarrollador de software, prácticas' },
    org: 'HYVE',
    place: 'Munich, DE',
    kind: 'internship',
    start: '2023-07',
    end: '2023-09',
    highlights: {
      en: [
        'Learned the basics of cross-platform mobile development with React Native and TypeScript.',
        'Unit testing with Jest to improve code quality and stability.',
        'First steps with Docker for containerised deployment.',
        'Market research to identify features for client-driven improvements.',
        'Software for Raspberry Pi devices, using several APIs for data exchange between applications.',
      ],
      es: [
        'Primeros pasos en desarrollo móvil multiplataforma con React Native y TypeScript.',
        'Pruebas unitarias con Jest para mejorar la calidad y la estabilidad del código.',
        'Primeros pasos con Docker para el despliegue en contenedores.',
        'Investigación de mercado para identificar funciones que mejoraran los proyectos de clientes.',
        'Software para dispositivos Raspberry Pi, usando varias APIs para intercambiar datos entre aplicaciones.',
      ],
    },
  },
  {
    period: { en: 'Mar – Jun 2024', es: 'mar – jun 2024' },
    title: { en: 'Software developer, internship', es: 'Desarrollador de software, prácticas' },
    org: 'OVAN GmbH',
    place: 'Berlin, DE',
    kind: 'internship',
    start: '2024-03',
    end: '2024-06',
    highlights: {
      en: [
        'Built custom software solutions and web portals with TYPO3 CMS.',
        'Implemented React applications inside TYPO3 extensions, improving the interface and functionality.',
        'Developed back-end systems and data structures with Laravel to support the React applications.',
        'Designed and implemented several entity-relationship models for different databases.',
        'Designed and integrated user interfaces.',
        'Debugged and optimised existing and in-house solutions in TYPO3 and React.',
        'Worked with the development team to solve technical challenges.',
      ],
      es: [
        'Desarrollo de soluciones de software a medida y portales web con TYPO3 CMS.',
        'Implementación de aplicaciones React dentro de extensiones de TYPO3, mejorando la interfaz y la funcionalidad.',
        'Desarrollo de sistemas back-end y estructuras de datos con Laravel para respaldar las aplicaciones React.',
        'Diseño e implementación de varios modelos entidad-relación para distintas bases de datos.',
        'Diseño e integración de interfaces de usuario.',
        'Depuración y optimización de soluciones internas y existentes en TYPO3 y React.',
        'Colaboración con el equipo de desarrollo para resolver retos técnicos.',
      ],
    },
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
      en: 'Develops and maintains an enterprise ERP platform for the automotive sector, with Laravel and JavaScript: sales, appraisals, billing and document management.',
      es: 'Desarrolla y mantiene una plataforma ERP empresarial del sector automoción, con Laravel y JavaScript: ventas, tasaciones, facturación y gestión documental.',
    },
    highlights: {
      en: [
        'Automated vehicle catalogue ingestion over SFTP: asynchronous processing, versioned schema validation, idempotent updates and safe rollback.',
        'End-to-end module to send documents in bulk to external systems, with integrity validation, visible progress and full traceability.',
        'Multi-API integration with two-way synchronisation of external providers, OAuth2-secured endpoints, automatic retries and structured logging.',
        'Queue-based architecture for billing and accounting: idempotent jobs, configurable chunking, logical locks against race conditions and live metrics.',
        'Granular authorisation, thorough validation, separate web and API guards, and audit trails for sensitive operations.',
        'Testing with PHPUnit, technical documentation and established patterns (Repository, Jobs, Policies, DTOs).',
      ],
      es: [
        'Ingestión automatizada de un catálogo de vehículos por SFTP: procesamiento asíncrono, validación de esquema versionada, actualizaciones idempotentes y vuelta atrás segura.',
        'Módulo de extremo a extremo para enviar documentos en bloque a sistemas externos, con validación de integridad, progreso visible y trazabilidad completa.',
        'Integración con varias APIs y sincronización bidireccional de proveedores externos, endpoints protegidos con OAuth2, reintentos automáticos y logs estructurados.',
        'Arquitectura basada en colas para facturación y contabilidad: tareas idempotentes, procesado por lotes configurable, bloqueos lógicos contra condiciones de carrera y métricas en vivo.',
        'Autorización granular, validación exhaustiva, guards separados para web y API, y trazas de auditoría en operaciones sensibles.',
        'Pruebas con PHPUnit, documentación técnica y patrones establecidos (Repository, Jobs, Policies, DTOs).',
      ],
    },
    homeHighlights: {
      en: [
        'Automated vehicle catalogue ingestion over SFTP: asynchronous processing, versioned schema validation, idempotent updates and safe rollback.',
        'Multi-API integration with two-way synchronisation of external providers, OAuth2-secured endpoints, automatic retries and structured logging.',
        'Queue-based architecture for billing and accounting: idempotent jobs, configurable chunking, logical locks against race conditions and live metrics.',
        'Granular authorisation, audit trails for sensitive operations, and PHPUnit testing.',
      ],
      es: [
        'Ingestión automatizada de un catálogo de vehículos por SFTP: procesamiento asíncrono, validación de esquema versionada, actualizaciones idempotentes y vuelta atrás segura.',
        'Integración con varias APIs y sincronización bidireccional de proveedores externos, endpoints protegidos con OAuth2, reintentos automáticos y logs estructurados.',
        'Arquitectura basada en colas para facturación y contabilidad: tareas idempotentes, procesado por lotes configurable, bloqueos lógicos contra condiciones de carrera y métricas en vivo.',
        'Autorización granular, trazas de auditoría en operaciones sensibles y pruebas con PHPUnit.',
      ],
    },
  },
];
