## Branch Strategy

We keep two protected branches in sync with the backend template:

- **production** — deploy-ready, always green.
- **develop** — default branch where day-to-day work lands.

Create release pull requests from `develop` to `production` when a batch of changes is ready to ship.

### Branch Naming

Create topic branches off `develop` using:

```
RSRVT-<ISSUE_NUMBER>-<short-description>
```

Examples:

```
RSRVT-18-add-auth-shell
RSRVT-42-fix-query-cache
RSRVT-77-update-eslint-rules
```

`RSRVT` stands for **rs-react-vite-template** and mirrors the naming convention used across Resolve Studio repositories.

## Local Checks

Before opening a pull request, run:

```bash
pnpm lint          # ESLint with --max-warnings=0
pnpm build         # Type-check + production build
pnpm preview       # Optional: smoke-test the built bundle
```

Husky and lint-staged handle formatting/linting on staged files, while Commitlint validates commit messages locally and in CI.

## Commit Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Keep the type in English; the description may be in Russian if it improves clarity.

```
<type>: <description>
```

Common types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`.

Examples:

```
feat: scaffold dashboard shell
fix: correct axios base url detection
chore: refresh tailwind config
docs: clarify shadcn component workflow
```

## Pull Requests

- Target `develop` for regular changes. For hotfixes, branch from `production`, release, then back-merge into `develop`.
- Keep PRs focused; split large features into smaller, reviewable chunks when possible.
- Fill in the PR template checklist (screenshots, tests, docs updates, etc.).
- Link related issues (e.g. `Resolves #123`).

CI runs linting, build, and commitlint checks. Rebase or merge from `develop` frequently to stay conflict-free.

## Release Automation

`release-please` handles semantic versioning and changelog updates—avoid editing `CHANGELOG.md` manually. Label pull requests accurately (`feat`, `fix`, etc.) so release notes stay meaningful.

## Repository Hygiene

- Labels are synchronized via `.github/labels.yml`. Update the file and trigger the sync workflow when introducing new labels.
- Review `.github/CODEOWNERS` before adding components; it defines the default reviewers for each area of the codebase.

## Credits

Created and maintained by **Aidamir Kambiev** (Resolve Studio). Significant contributors are welcome to add themselves to `AUTHORS.md`.

## Support & Issues

Use [GitHub Issues](https://github.com/ResolveStudioIO/rs-react-vite-template/issues) for bug reports and feature discussions. Include reproduction steps, Node/PNPM versions, and relevant console output.
