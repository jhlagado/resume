# Resume Site

Simple resume site built with Vite + React and published to GitHub Pages.

## Edit content

The resume content is in markdown:

`src/resume.md`

Update this file, then run locally:

```bash
yarn dev
```

## Build

```bash
npm run build
```

This outputs static files to `dist/` for GitHub Pages deployment.

`npm run build` runs `validate:resume` first to ensure `src/resume.md` matches the expected resume schema.
