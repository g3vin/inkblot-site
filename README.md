# The Official Inkblot Website

A custom GitHub Pages site built with Vite and React.

## Development

Install dependencies:

```sh
npm install
```

Start the local dev server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and
deploys `dist` to GitHub Pages whenever changes are pushed to `main`.
