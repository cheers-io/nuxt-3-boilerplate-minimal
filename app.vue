<template>
  <div>
    <div class="language-container">
      <form>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="de">de</option>
        </select>
        <p>{{ $t('welcome') }}</p>
      </form>
    </div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style>
.language-container {
  @apply p-4 right mx-auto w-48 text-center;
}

select {
  @apply px-4 py-3 rounded-full w-48 bg-slate-100;
}

p {
  @apply mx-auto text-center;
}
</style>
