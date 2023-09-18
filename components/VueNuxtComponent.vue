<script setup lang="ts">
// this component calls `useNuxtApp` just to create a binding to Nuxt environment
const nuxtApp = useNuxtApp();

// fake async call to trigger Suspense behavior
// that can only be handled by `mountSuspended` from `nuxt-vitest/utils`
await new Promise(resolve => setTimeout(resolve, 1000));

const {
  vueApp: { version }
} = nuxtApp;
</script>

<template>
  <h1>Vue version is {{ version }}</h1>
</template>
