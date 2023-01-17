<template>
  <div>
    <div>
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
