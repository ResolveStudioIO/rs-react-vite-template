# rs-react-vite-template

Шаблон React + Vite + TypeScript с TailwindCSS, shadcn/ui и готовыми практиками CI, линтинга и Docker.

## Стек

- Vite + React + TypeScript
- TailwindCSS + shadcn/ui
- TanStack Query, Zustand, React Hook Form + Zod, Axios
- ESLint + Prettier + Husky + Commitlint
- GitHub Actions (CI, release-please, labels sync)
- Dockerfile + Nginx конфиг для деплоя

## Требования

- Node.js 22.17.0
- pnpm 10.17.1
  Версии зафиксированы в CI.

## Быстрый старт

1. Установить зависимости:
    ```bash
      pnpm install
    ```
2. Создать файл окружения:

    ```bash
      cp .env.example .env
    ```

    Заполнить переменные (VITE_API_BASE_URL).

3. Запустить проект:
    ```bash
      pnpm dev
    ```

Приложение будет доступно на [http://localhost:5173](http://localhost:5173).

## Переменные окружения

.env.example содержит:

- VITE_API_BASE_URL — базовый URL API

## Скрипты

- pnpm dev — запуск в dev-режиме
- pnpm build — сборка проекта
- pnpm preview — предпросмотр собранного проекта
- pnpm lint — запуск ESLint
- pnpm lint --fix — фиксы ESLint
- pnpm format — форматирование Prettier

## CI/CD

- CI запускается на push и pull_request в основные ветки
- release-please — автоматизация релизов и changelog
- labels-sync — синхронизация меток из .github/labels.yml

## Качество кода

- ESLint + Prettier
- Husky hooks (pre-commit, commit-msg)
- Commitlint (Conventional Commits)

## Контейнеризация

- Dockerfile для сборки фронтенда
- nginx.conf с поддержкой SPA (fallback на index.html)

## Лицензия

MIT

## Вклад

Смотрите CONTRIBUTING.md и шаблон Pull Request.
