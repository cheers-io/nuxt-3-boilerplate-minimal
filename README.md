# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Unit Tests

This boilerplate has [playwright](https://playwright.dev/) for E2E testing and [vitest](https://vitest.dev/) for unit tests. Please create your E2E tests inside **tests** folder and create your unit tests inside the related file/component folder. 

i.e: <br>
```
-- components
---- PerfectComponent
------ index.vue
------ PerfectComponent.spec.ts
```
