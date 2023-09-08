<script setup lang="ts">
// this component doesn't rely on Nuxt environment
// and therefore can be tested with `mount` from `@vue/test-utils`
const world = ref('World');
</script>

<template>
  <h1>Hello {{ world }}</h1>
</template>
