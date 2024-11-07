# Portfolio Monorepo

_wip_ built using turborepo.

> ### note:
>
> uses [**pnpm**](https://pnpm.io/) and [**turborepo**](https://turbo.build/)

## Architecture

### Apps

- `apps/www` main application code

### Packages

- `packages/` packages
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command:

```bash
$ cd my-turborepo
$ pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```bash
$ cd my-turborepo
$ pnpm dev
```
