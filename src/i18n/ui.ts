export const locales = ['en', 'es'] as const;
export type Lang = (typeof locales)[number];

export const ui = {
  en: {
    siteTitle: 'Juan Suárez — Full-stack developer',
    siteDescription:
      'Full-stack developer. I turn a business need into a specified, tested, running system.',
    skip: 'Skip to content',
    nav: { method: 'Method', templates: 'Templates', work: 'Work', journey: 'Journey', cv: 'CV', contact: 'Contact' },
    theme: { label: 'Theme', system: 'System', light: 'Light', dark: 'Dark' },
    lang: { label: 'Language' },
    title: 'Software that makes companies run better.',
    subtitle:
      'Full-stack developer. I turn a business need into a specified, tested, running system.',
    method: {
      heading: 'Method',
      intro: 'Every project follows the same five steps.',
      steps: [
        { name: 'Need', text: 'We start from the problem, not the ticket.' },
        { name: 'Spec', text: 'Written, reviewable, versioned.' },
        { name: 'Build', text: 'Small, tested increments.' },
        { name: 'Verify', text: 'Security and data integrity by default.' },
        { name: 'Operate', text: 'Logs, queues and rollbacks that make incidents boring.' },
      ],
    },
    templates: {
      heading: 'Templates',
      intro: 'The documents behind the method. Pick a block of the page to see what goes in it, an example and why it matters. Generic, so adapt them to your project.',
      hintTag: 'What goes here',
      exampleTag: 'Illustrative example',
      whyTag: 'Why it matters',
      prev: 'Previous',
      next: 'Next',
      of: 'of',
    },
    work: {
      heading: 'Work',
      intro: 'Selected projects.',
      status: { shipped: 'Shipped', wip: 'In progress', draft: 'Case study in writing' },
      more: 'Also on GitHub',
    },
    journey: { heading: 'Journey', intro: 'A short history as a programmer.' },
    contact: { heading: 'Contact', intro: 'Email is the fastest way.' },
    cv: {
      title: 'Curriculum vitae',
      savePdf: 'Save as PDF',
      back: 'Back to site',
      summary: 'Profile',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
      projects: 'Projects',
      contact: 'Contact',
    },
    footer: 'Juan Suárez',
  },
  es: {
    siteTitle: 'Juan Suárez — Desarrollador full-stack',
    siteDescription:
      'Desarrollador full-stack. Convierto una necesidad de negocio en un sistema especificado, probado y en producción.',
    skip: 'Saltar al contenido',
    nav: { method: 'Método', templates: 'Plantillas', work: 'Trabajo', journey: 'Trayectoria', cv: 'CV', contact: 'Contacto' },
    theme: { label: 'Tema', system: 'Sistema', light: 'Claro', dark: 'Oscuro' },
    lang: { label: 'Idioma' },
    title: 'Software que hace que las empresas funcionen mejor.',
    subtitle:
      'Desarrollador full-stack. Convierto una necesidad de negocio en un sistema especificado, probado y en producción.',
    method: {
      heading: 'Método',
      intro: 'Todos los proyectos siguen los mismos cinco pasos.',
      steps: [
        { name: 'Necesidad', text: 'Partimos del problema, no del ticket.' },
        { name: 'Spec', text: 'Escrita, revisable y versionada.' },
        { name: 'Construcción', text: 'Incrementos pequeños y probados.' },
        { name: 'Verificación', text: 'Seguridad e integridad de datos por defecto.' },
        { name: 'Operación', text: 'Logs, colas y reversiones que hacen que las incidencias sean aburridas.' },
      ],
    },
    templates: {
      heading: 'Plantillas',
      intro: 'Los documentos detrás del método. Elige un bloque de la hoja para ver qué va en él, un ejemplo y por qué importa. Genéricos: adáptalos a tu proyecto.',
      hintTag: 'Qué va aquí',
      exampleTag: 'Ejemplo ilustrativo',
      whyTag: 'Por qué importa',
      prev: 'Anterior',
      next: 'Siguiente',
      of: 'de',
    },
    work: {
      heading: 'Trabajo',
      intro: 'Proyectos seleccionados.',
      status: { shipped: 'Publicado', wip: 'En curso', draft: 'Caso en redacción' },
      more: 'También en GitHub',
    },
    journey: { heading: 'Trayectoria', intro: 'Una breve historia como programador.' },
    contact: { heading: 'Contacto', intro: 'El email es la vía más rápida.' },
    cv: {
      title: 'Currículum',
      savePdf: 'Guardar como PDF',
      back: 'Volver al sitio',
      summary: 'Perfil',
      experience: 'Experiencia',
      education: 'Formación',
      skills: 'Habilidades',
      languages: 'Idiomas',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    footer: 'Juan Suárez',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
