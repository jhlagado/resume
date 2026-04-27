# Resume Site

Simple resume site built with Vite + React and published to GitHub Pages.

## Edit content

The resume content is in markdown:

- `src/resume.md` - hybrid / general version
- `src/resume-permanent.md` - permanent-role version
- `src/resume-contract.md` - contract-role version

Update this file, then run locally:

```bash
yarn dev
```

## Build

```bash
npm run build
```

This outputs static files to `dist/` for GitHub Pages deployment.

`npm run build` runs `validate:resume` first to ensure all `src/resume*.md` files match the expected resume schema.

## Published pages

- `/` - hybrid / general resume
- `/permanent.html` - permanent-role version
- `/contract.html` - contract-role version
