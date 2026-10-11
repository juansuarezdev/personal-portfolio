# Personal Portfolio

Portfolio of **Juan Suárez**, full-stack developer. Bilingual (English and Spanish), light and dark themes, an interactive CV that exports to PDF, and interactive demos of selected projects.

## Stack

- [Astro](https://astro.build) with TypeScript, static output
- Plain CSS with design tokens, no UI framework
- Vanilla JavaScript for the small interactive parts (theme, unfolding sections, demos)
- No backend, database or CMS

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type check and production build
npm run preview  # serve the production build
```

Requires Node.js 22.12 or newer.

## Structure

```
src/
  components/   CV, project detail and the interactive demos
  data/         work, career, CV and template content (EN/ES)
  i18n/         interface strings
  layouts/      base layout, navbar and theme toggle
  pages/        /en and /es routes
  styles/       global styles and tokens
```

## Notes

- The CV page has a print stylesheet: a single linear column with plain text and standard headings, so the exported PDF is readable by people and by screening software.
- The demos run entirely in the browser with simulated data.
