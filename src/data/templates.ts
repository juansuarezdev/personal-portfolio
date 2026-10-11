import type { Lang } from '../i18n/ui';

export interface Section {
  h: string;
  hint: string;
  example: string[];
  why: string;
}
export interface Template {
  key: 'spec' | 'adr' | 'rules';
  tab: string;
  title: string;
  meta: string;
  sections: Section[];
}

export const templates: Record<Lang, Template[]> = {
  en: [
    {
      key: 'spec',
      tab: 'SPEC',
      title: 'SPEC: Late-payment reminders',
      meta: 'draft · agreed · in progress · done',
      sections: [
        { h: 'Need', hint: 'Who has the problem, what happens today and what it costs. In the business owner’s words.', example: ['The shop owner chases late invoices by hand every week, and some get forgotten.'], why: 'Keeps the work tied to a real business problem, not to a ticket.' },
        { h: 'Goal', hint: 'One sentence: what is true when this is done that is not true today.', example: ['Every overdue invoice gets a reminder automatically. The owner only handles exceptions.'], why: 'One checkable outcome everyone agrees on before anything is built.' },
        { h: 'Out of scope', hint: 'What this deliberately does not do.', example: ['Online payments.', 'Replacing the invoicing software.'], why: 'Prevents scope creep and surprise costs.' },
        { h: 'Behaviour', hint: 'Numbered statements that can be checked as pass or fail.', example: ['R01 When an invoice is 7 days overdue, the system emails the customer once.', 'R02 If the email bounces, the system flags the invoice for the owner.'], why: 'Testable statements double as acceptance tests.' },
        { h: 'Tasks', hint: 'Small steps, each shippable on its own, naming what it touches.', example: ['1. Read overdue invoices from the existing export.', '2. Send the reminder from an email template.', '3. List flagged invoices on a simple page.'], why: 'Small steps deliver value early and are easy to review.' },
        { h: 'Risks and decisions', hint: 'What could go wrong, how it is handled, and the choices made.', example: ['Risk: duplicate emails. Fix: one reminder per invoice, recorded.', 'Decision: reuse the current mail provider (see ADR-001).'], why: 'Surfaces trade-offs while they are still cheap to change.' },
        { h: 'Verification', hint: 'How anyone can confirm it works, and how to undo it.', example: ['Test: an overdue invoice triggers exactly one email.', 'Owner check: send a reminder to your own address.', 'Rollback: switch the job off. Nothing else changes.'], why: 'The owner can confirm it works without reading code.' },
        { h: 'Operation', hint: 'Logs, alerts and who to ask when it breaks.', example: ['Daily log of reminders sent. Alert if the job fails.'], why: 'Turns incidents from emergencies into routine.' },
      ],
    },
    {
      key: 'adr',
      tab: 'ADR',
      title: 'ADR-001: Run reminders as a queued job',
      meta: 'proposed · accepted · superseded',
      sections: [
        { h: 'Context', hint: 'The situation and the constraints that force a choice. Facts only.', example: ['Reminders must go out daily without slowing down the invoicing screen.'], why: 'Future readers see why a choice was needed at all.' },
        { h: 'Options', hint: 'Each real alternative, with what it gives and what it costs.', example: ['A. Send inside the web request: simple, but slow and fragile.', 'B. Queued job: a little more setup, retries and logs for free.'], why: 'Shows alternatives were weighed, not skipped.' },
        { h: 'Decision', hint: 'What was chosen, in one or two sentences, and the main reason.', example: ['B. Queue the job, so failures retry without anyone noticing.'], why: 'One clear answer to point to.' },
        { h: 'Consequences', hint: 'What gets easier, what gets harder, and when to revisit.', example: ['Easier: retries and monitoring.', 'Harder: one more service to run.', 'Revisit when: volume or hosting changes.'], why: 'Costs are explicit, with a trigger to review.' },
      ],
    },
    {
      key: 'rules',
      tab: 'Agent rules',
      title: 'Rules for a coding agent',
      meta: 'generic example · adapt to your team',
      sections: [
        { h: 'Understand first', hint: 'Read before touching. Ask when the request is ambiguous.', example: ['✗ Edit a file after reading only its name.', '✓ Read the file and the code that calls it first.'], why: 'Prevents confident changes based on a wrong picture.' },
        { h: 'Change little', hint: 'The smallest change that solves the problem. Follow existing patterns.', example: ['✗ Rewrite the module while fixing one bug.', '✓ Change only what the fix needs.'], why: 'Small diffs are reviewable and safe to ship.' },
        { h: 'Prove it', hint: 'Run tests and build. Report real output and what was not verified.', example: ['✗ “Should work now.”', '✓ “Tests pass. Not verified: email delivery.”'], why: 'Done means checked, not assumed.' },
        { h: 'Stay safe', hint: 'Ask before anything hard to undo. Never put secrets in code or logs.', example: ['✗ Delete production data to see what happens.', '✓ Ask first, with the exact command and its effect.'], why: 'Limits the damage an automated mistake can do.' },
      ],
    },
  ],
  es: [
    {
      key: 'spec',
      tab: 'SPEC',
      title: 'SPEC: Recordatorios de pagos atrasados',
      meta: 'borrador · acordada · en curso · hecha',
      sections: [
        { h: 'Necesidad', hint: 'Quién tiene el problema, qué ocurre hoy y cuánto cuesta. Con las palabras del responsable del negocio.', example: ['El dueño de la tienda reclama a mano las facturas atrasadas cada semana, y algunas se olvidan.'], why: 'Mantiene el trabajo ligado a un problema real del negocio, no a un ticket.' },
        { h: 'Objetivo', hint: 'Una frase: qué será cierto al terminar que hoy no lo es.', example: ['Cada factura vencida recibe un recordatorio automático. El dueño solo gestiona las excepciones.'], why: 'Un resultado comprobable en el que todos coinciden antes de construir.' },
        { h: 'Fuera de alcance', hint: 'Lo que esto no hace a propósito.', example: ['Pagos online.', 'Sustituir el programa de facturación.'], why: 'Evita que el alcance crezca y los costes sorpresa.' },
        { h: 'Comportamiento', hint: 'Frases numeradas que se pueden comprobar como correctas o incorrectas.', example: ['R01 Cuando una factura lleva 7 días vencida, el sistema envía un correo al cliente una sola vez.', 'R02 Si el correo rebota, el sistema marca la factura para el dueño.'], why: 'Las frases comprobables sirven como pruebas de aceptación.' },
        { h: 'Tareas', hint: 'Pasos pequeños, cada uno entregable por sí solo, indicando qué toca.', example: ['1. Leer las facturas vencidas de la exportación actual.', '2. Enviar el recordatorio desde una plantilla de correo.', '3. Listar las facturas marcadas en una página sencilla.'], why: 'Los pasos pequeños aportan valor pronto y se revisan fácil.' },
        { h: 'Riesgos y decisiones', hint: 'Qué puede fallar, cómo se trata y qué se eligió.', example: ['Riesgo: correos duplicados. Solución: un recordatorio por factura, registrado.', 'Decisión: reutilizar el proveedor de correo actual (ver ADR-001).'], why: 'Saca a la luz los compromisos mientras aún es barato cambiarlos.' },
        { h: 'Verificación', hint: 'Cómo cualquiera puede confirmar que funciona y cómo deshacerlo.', example: ['Prueba: una factura vencida genera exactamente un correo.', 'Comprobación del dueño: enviar un recordatorio a tu propia dirección.', 'Vuelta atrás: apagar la tarea. Nada más cambia.'], why: 'El responsable puede confirmar que funciona sin leer código.' },
        { h: 'Operación', hint: 'Logs, alertas y a quién preguntar cuando falle.', example: ['Registro diario de recordatorios enviados. Alerta si la tarea falla.'], why: 'Convierte las incidencias de emergencias en rutina.' },
      ],
    },
    {
      key: 'adr',
      tab: 'ADR',
      title: 'ADR-001: Enviar recordatorios como tarea en cola',
      meta: 'propuesta · aceptada · sustituida',
      sections: [
        { h: 'Contexto', hint: 'La situación y las restricciones que obligan a elegir. Solo hechos.', example: ['Los recordatorios deben salir a diario sin ralentizar la pantalla de facturación.'], why: 'Quien lo lea en el futuro verá por qué hacía falta decidir.' },
        { h: 'Opciones', hint: 'Cada alternativa real, con lo que aporta y lo que cuesta.', example: ['A. Enviar dentro de la petición web: simple, pero lento y frágil.', 'B. Tarea en cola: algo más de preparación, con reintentos y logs incluidos.'], why: 'Muestra que se valoraron alternativas, no que se saltaron.' },
        { h: 'Decisión', hint: 'Qué se eligió, en una o dos frases, y la razón principal.', example: ['B. Poner la tarea en cola, para que los fallos se reintenten sin que nadie lo note.'], why: 'Una respuesta clara a la que remitirse.' },
        { h: 'Consecuencias', hint: 'Qué se simplifica, qué se complica y cuándo revisar.', example: ['Más fácil: reintentos y monitorización.', 'Más difícil: un servicio más que mantener.', 'Revisar cuando: cambie el volumen o el alojamiento.'], why: 'Los costes quedan explícitos, con una señal para revisarlos.' },
      ],
    },
    {
      key: 'rules',
      tab: 'Reglas de agente',
      title: 'Reglas para un agente de código',
      meta: 'ejemplo genérico · adáptalo a tu equipo',
      sections: [
        { h: 'Entender primero', hint: 'Leer antes de tocar. Preguntar cuando la petición es ambigua.', example: ['✗ Editar un archivo habiendo leído solo su nombre.', '✓ Leer primero el archivo y el código que lo llama.'], why: 'Evita cambios seguros de sí mismos basados en una idea equivocada.' },
        { h: 'Cambiar poco', hint: 'El cambio más pequeño que resuelva el problema. Seguir los patrones existentes.', example: ['✗ Reescribir el módulo al arreglar un error.', '✓ Cambiar solo lo que necesita el arreglo.'], why: 'Los cambios pequeños se revisan y se publican con seguridad.' },
        { h: 'Demostrarlo', hint: 'Ejecutar pruebas y compilación. Informar de la salida real y de lo no verificado.', example: ['✗ «Ya debería funcionar».', '✓ «Las pruebas pasan. No verificado: el envío de correos».'], why: 'Hecho significa comprobado, no supuesto.' },
        { h: 'Ir sobre seguro', hint: 'Preguntar antes de lo difícil de deshacer. Nunca poner secretos en código o logs.', example: ['✗ Borrar datos de producción para ver qué pasa.', '✓ Preguntar antes, con el comando exacto y su efecto.'], why: 'Limita el daño que puede causar un error automatizado.' },
      ],
    },
  ],
};
