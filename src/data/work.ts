import type { Lang } from '../i18n/ui';

export type Status = 'case' | 'shipped' | 'wip';
export type DemoKey = 'planner' | 'automation' | 'nonsleep' | 'beast' | 'hevy';
type Text = Record<Lang, string>;

export interface WorkItem {
  slug: string;
  title: Text;
  summary: Text;
  status: Status;
  stack: string[];
  demo?: DemoKey;
  /** Text still waiting for the author's review. */
  draft?: boolean;
  github?: string;
  body?: { h: Text; text: Text }[];
}

export const work: WorkItem[] = [
  {
    slug: 'workshop-planning',
    status: 'case',
    draft: true,
    demo: 'planner',
    title: {
      en: 'Digitising a workshop’s team planning',
      es: 'Digitalización de la planificación de equipos de un taller',
    },
    summary: {
      en: 'Two planners, one per team, replaced paper in an automotive workshop. Integrations with manufacturer systems.',
      es: 'Dos planificadores, uno por equipo, sustituyeron al papel en un taller de automoción. Integraciones con sistemas de marcas.',
    },
    stack: ['Laravel', 'PHP', 'Redis', 'MySQL'],
    body: [
      {
        h: { en: 'Need', es: 'Necesidad' },
        text: {
          en: 'A car workshop organised its work teams on paper: who works on which vehicle, when, and how long it takes. Information was spread across places and hard to keep current.',
          es: 'Un taller de automoción organizaba a sus equipos de trabajo en papel: quién trabaja en qué vehículo, cuándo y cuánto tarda. La información estaba repartida y era difícil mantenerla al día.',
        },
      },
      {
        h: { en: 'Analysis', es: 'Análisis' },
        text: {
          en: 'Each team works differently, so one generic board would have fitted none of them well. The starting point was understanding how each team really plans its day.',
          es: 'Cada equipo trabaja de forma distinta, así que un tablero genérico no habría encajado bien en ninguno. El punto de partida fue entender cómo planifica realmente su día cada equipo.',
        },
      },
      {
        h: { en: 'Solution', es: 'Solución' },
        text: {
          en: 'The organisation of the workshop teams was digitised end to end. Two planners were built, each shaped around the needs of its team. The platform also integrates with several car manufacturers’ systems (such as Renault), each using different technologies.',
          es: 'Se digitalizó por completo la organización de los equipos de trabajo del taller. Se desarrollaron dos planificadores, cada uno según las necesidades de su equipo. La plataforma además se integra con sistemas de varias marcas de automoción (como Renault), cada una con tecnologías distintas.',
        },
      },
      {
        h: { en: 'Impact', es: 'Impacto' },
        text: {
          en: 'The workshop no longer uses paper to organise its teams.',
          es: 'El taller ya no usa papel para organizar a sus equipos.',
        },
      },
    ],
  },
  {
    slug: 'automation-platform',
    status: 'case',
    draft: true,
    demo: 'automation',
    title: { en: 'Personal automation platform', es: 'Plataforma de automatización personal' },
    summary: {
      en: 'Scheduled workflows that keep a personal organisation system running without anyone remembering to do it.',
      es: 'Flujos programados que mantienen un sistema de organización personal en marcha sin que nadie tenga que acordarse.',
    },
    stack: ['n8n', 'launchd', 'Node.js'],
    body: [
      {
        h: { en: 'Need', es: 'Necesidad' },
        text: {
          en: 'Staying organised depended on remembering to do it every day: tagging reminders, protecting focus time, reviewing the week.',
          es: 'Mantenerse organizado dependía de acordarse de hacerlo cada día: etiquetar recordatorios, proteger el tiempo de foco, revisar la semana.',
        },
      },
      {
        h: { en: 'Analysis', es: 'Análisis' },
        text: {
          en: 'The workflows need to read and write Reminders and Calendar on the machine itself. That ruled out running n8n in Docker, which would have blocked that access, so it runs natively and starts again on its own after a crash or reboot.',
          es: 'Los flujos necesitan leer y escribir Recordatorios y Calendario en el propio equipo. Eso descartó ejecutar n8n en Docker, que habría bloqueado ese acceso, así que corre de forma nativa y se reinicia solo tras una caída o un reinicio.',
        },
      },
      {
        h: { en: 'Solution', es: 'Solución' },
        text: {
          en: 'Six scheduled n8n workflows and a few launchd jobs: morning tagging of reminders, a nudge that protects focus time, capture of project ideas, calendar blocking and conflict detection, and a weekly review digest. A small dashboard shows what runs and lets me switch each one on or off.',
          es: 'Seis flujos programados de n8n y algunas tareas de launchd: etiquetado matinal de recordatorios, un aviso que protege el tiempo de foco, captura de ideas de proyecto, bloqueo de calendario y detección de conflictos, y un resumen semanal. Un panel pequeño muestra qué se ejecuta y permite activar o desactivar cada uno.',
        },
      },
      {
        h: { en: 'What went wrong', es: 'Qué falló' },
        text: {
          en: 'When an AI provider’s credit ran out, several workflows stopped. A fallback provider now keeps them running. Lesson: every external dependency needs a plan for when it fails.',
          es: 'Cuando se agotó el crédito de un proveedor de IA, varios flujos se detuvieron. Ahora un proveedor alternativo los mantiene en marcha. Lección: cada dependencia externa necesita un plan para cuando falle.',
        },
      },
      {
        h: { en: 'For a small business', es: 'Para una pyme' },
        text: {
          en: 'The same pattern fits small businesses: a check before a deadline, a weekly summary, and tidy-up of incoming requests, all running on a schedule without anyone remembering to start them.',
          es: 'El mismo patrón sirve para una pyme: un aviso antes de un plazo, un resumen semanal y el orden de las peticiones entrantes, todo en un horario fijo sin que nadie tenga que acordarse de lanzarlo.',
        },
      },
    ],
  },
  {
    slug: 'non-sleep',
    status: 'shipped',
    demo: 'nonsleep',
    github: 'https://github.com/juansuarezdev/non-sleep',
    title: { en: 'Non-Sleep', es: 'Non-Sleep' },
    summary: {
      en: 'macOS menu bar app that keeps the Mac awake for a timed session and stops itself on low battery or heat.',
      es: 'App de barra de menús de macOS que mantiene el Mac despierto durante una sesión y se detiene sola con batería baja o calor.',
    },
    stack: ['Swift', 'SwiftUI', 'IOKit'],
    body: [
      {
        h: { en: 'What it does', es: 'Qué hace' },
        text: {
          en: 'You type how long and press Enter. The Mac stays awake until then, and the session ends by itself when time is up, the battery gets low or the Mac runs hot.',
          es: 'Escribes cuánto tiempo y pulsas Enter. El Mac se mantiene despierto hasta entonces, y la sesión termina sola cuando se acaba el tiempo, la batería baja o el Mac se calienta.',
        },
      },
      {
        h: { en: 'Safe by default', es: 'Seguro por defecto' },
        text: {
          en: 'The standard mode needs no administrator rights and uses a system power assertion, which the kernel drops if the app crashes. The lid-closed mode is opt-in and comes with a backstop that turns it off. The app has no dependencies.',
          es: 'El modo estándar no necesita permisos de administrador y usa una aserción de energía del sistema, que el kernel libera si la app se cae. El modo con la tapa cerrada es opcional e incluye un respaldo que lo desactiva. La app no tiene dependencias.',
        },
      },
    ],
  },
  {
    slug: 'supported-employment-portal',
    status: 'wip',
    title: {
      en: 'Web and transparency portal for a supported-employment company',
      es: 'Web y portal de transparencia para una empresa de empleo protegido',
    },
    summary: {
      en: 'Public site, document portal and admin panel.',
      es: 'Web pública, portal de documentos y panel de administración.',
    },
    stack: ['Laravel', 'SQLite'],
  },
];

export const moreWork: WorkItem[] = [
  {
    slug: 'beast',
    status: 'shipped',
    demo: 'beast',
    github: 'https://github.com/juansuarezdev/beast',
    title: { en: 'Beast', es: 'Beast' },
    summary: {
      en: 'Self-hosted gym tracker with Apple Health sync and iOS Live Activities. Fork of openGym.',
      es: 'Tracker de gimnasio autoalojado con sincronización de Apple Health y Live Activities de iOS. Fork de openGym.',
    },
    stack: ['React', 'Node.js', 'Capacitor', 'Swift'],
    body: [
      {
        h: { en: 'What it adds', es: 'Qué añade' },
        text: {
          en: 'Beast is a fork of openGym (AGPL-3.0). On iOS it writes finished workouts to Apple Health and shows the running workout on the lock screen as a Live Activity, where you can tick the next set. It also adds strength progression, cardio by sport and goals.',
          es: 'Beast es un fork de openGym (AGPL-3.0). En iOS guarda los entrenamientos terminados en Apple Health y muestra el entrenamiento en curso en la pantalla de bloqueo como Live Activity, donde puedes marcar la siguiente serie. Añade también progresión de fuerza, cardio por deporte y objetivos.',
        },
      },
    ],
  },
  {
    slug: 'hevy-routines',
    status: 'shipped',
    demo: 'hevy',
    github: 'https://github.com/juansuarezdev/hevy.routines',
    title: { en: 'hevy.routines', es: 'hevy.routines' },
    summary: {
      en: 'Python script that creates training routines in the Hevy app from YAML files, through its REST API.',
      es: 'Script en Python que crea rutinas de entrenamiento en la app Hevy a partir de archivos YAML, mediante su API REST.',
    },
    stack: ['Python', 'httpx', 'pydantic'],
    body: [
      {
        h: { en: 'What it does', es: 'Qué hace' },
        text: {
          en: 'Routines live as YAML files. The script validates them with pydantic, resolves exercise names to Hevy’s real template IDs and posts each routine to the API. A dry-run mode prints the JSON without sending anything.',
          es: 'Las rutinas viven como archivos YAML. El script las valida con pydantic, resuelve los nombres de ejercicio a los IDs reales de Hevy y envía cada rutina a la API. Un modo dry-run imprime el JSON sin enviar nada.',
        },
      },
    ],
  },
];

export const allWork: WorkItem[] = [...work, ...moreWork];
export const hasPage = (w: WorkItem) => w.status !== 'wip';
