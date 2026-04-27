# Resume Site

Simple resume site built with Vite + React and published to GitHub Pages.

## Published pages

- Hybrid/default resume: `https://jhardy.work/`
- Permanent-role resume: `https://jhardy.work/permanent.html`
- Contract resume: `https://jhardy.work/contract.html`

## Edit content

The resume content is in markdown:

- `src/resume.md` for the hybrid/default version
- `src/resume-permanent.md` for permanent frontend engineering roles
- `src/resume-contract.md` for PAYG / sole-trader contract work

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
