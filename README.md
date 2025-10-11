[![CI](https://github.com/ResolveStudioIO/rs-react-vite-template/actions/workflows/ci.yml/badge.svg)](https://github.com/ResolveStudioIO/rs-react-vite-template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Release](https://img.shields.io/github/v/release/ResolveStudioIO/rs-react-vite-template)](https://github.com/ResolveStudioIO/rs-react-vite-template/releases)
[![Changelog](https://img.shields.io/badge/Changelog-CHANGELOG.md-informational.svg)](./CHANGELOG.md)
[![Last Commit](https://img.shields.io/github/last-commit/ResolveStudioIO/rs-react-vite-template)](https://github.com/ResolveStudioIO/rs-react-vite-template/commits)

# rs-react-vite-template

A production-ready **React + Vite + TypeScript** starter that mirrors the backend template: modern UI kit, state management, CI/CD automation, and containerized delivery.

## Features

- **React 19 + Vite 7** with strict TypeScript, React Router, and rapid HMR.
- **Styling system** powered by Tailwind CSS v4, shadcn/ui, Lucide icons, and `components.json` for on-demand component generation.
- **State, forms, data layer** baked in with TanStack Query, Zustand, React Hook Form, Zod, and Axios helpers.
- **Quality gates** enforced by ESLint (flat config), Prettier, lint-staged, Husky, and Commitlint.
- **Automation** via GitHub Actions CI, release-please, label synchronization, and Renovate-ready layout.
- **Containerized delivery** with a multi-stage Dockerfile and SPA-friendly `nginx.conf`.

## Project structure

```text
src/
  api/               # REST helpers and shared axios instance
  app/               # Root providers, router shell, layout composition
  components/        # Reusable UI primitives + shadcn/ui exports
  constants/
  hooks/
  lib/               # Utility helpers (formatters, config, etc.)
  pages/             # Route-level screens
  schemas/           # Zod schemas shared across forms/services
  services/          # Feature-specific service layer
  stores/            # Zustand stores with selectors
  main.tsx           # App bootstrap (QueryClient, Router, etc.)
  main.css           # Tailwind entrypoint
public/
  vite.svg
components.json      # shadcn/ui generator config
Dockerfile           # Multi-stage build → nginx runtime image
nginx.conf           # SPA routing fallback and static caching
vite.config.ts       # Vite + Tailwind + React plugin config
```

## Requirements

- **Node.js** 22.17.0
- **pnpm** 10.17.1

Versions are pinned in CI and Docker images to ensure reproducible installs.

## Getting started

1. Install dependencies:
    ```bash
    pnpm install
    ```
2. Copy the example environment file and adjust values for your API backend:
    ```bash
    cp .env.example .env
    ```

    - `VITE_API_BASE_URL` — base URL for outbound REST calls.
3. Start the development server:
    ```bash
    pnpm dev
    ```
4. Open [http://localhost:5173](http://localhost:5173) to explore the app.
5. Build and preview a production bundle when you are ready to ship:
    ```bash
    pnpm build
    pnpm preview
    ```

### Docker

Build and serve the production bundle behind nginx:

```bash
docker build -t rs-react-vite-template .
docker run --rm -p 8080:80 rs-react-vite-template
```

The container exposes port `80`; mapping to `8080` locally avoids conflicts with dev servers.

### Tests & linting

```bash
pnpm lint          # ESLint with --max-warnings=0
pnpm build         # Type-check + optimized production build
pnpm preview       # Serve the built bundle for smoke testing
```

## Environment configuration

The project reads runtime configuration from `import.meta.env`. Keep secrets out of the repo and use `.env` only for local development.

- `VITE_API_BASE_URL` controls the default Axios instance; override per request if needed.
- Add new variables to `.env.example` and `vite-env.d.ts` to preserve type safety.

## CI/CD & automation

- **CI** (`.github/workflows/ci.yml`) runs linting and build checks on pull requests and `production` pushes.
- **Release-please** manages semantic versioning and changelog entries driven by Conventional Commits.
- **Labels sync** keeps repository labels aligned with `.github/labels.yml` for consistent triage.
- **Husky** hooks enforce lint-staged formatting and Commitlint before commits reach CI.

## Development workflow

- Branch from `develop` using the naming convention from [`CONTRIBUTING.md`](./CONTRIBUTING.md).
- Open pull requests into `develop`; once stable, merge `develop → production` for release.
- For hotfixes, branch from `production`, release, then back-merge into `develop`.

## Troubleshooting

- **`pnpm dev` port already in use**: stop other Vite/React dev servers or set `VITE_PORT` in `.env`.
- **API calls fail in Docker**: ensure `VITE_API_BASE_URL` is reachable from inside the container (e.g. `host.docker.internal`).
- **Lint errors on commit**: run `pnpm lint`; Husky blocks commits until ESLint passes.

## Contributors

<a href="https://github.com/ResolveStudioIO/rs-react-vite-template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ResolveStudioIO/rs-react-vite-template" alt="Contributors" />
</a>

## Credits

Created and maintained by **Aidamir Kambiev** (Resolve Studio). See [LICENSE](./LICENSE) for details.
