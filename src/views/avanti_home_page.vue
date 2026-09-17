<script setup lang="ts">
import AvantiHeader from '@/components/avanti_header.vue'

type NavId = 'home' | 'documenti' | 'profilo'

function onNavigate(_id: NavId) {}

function onAssistenza() {}
</script>

<template>
  <div class="avanti-home-page">
    <AvantiHeader @navigate="onNavigate" @assistenza="onAssistenza" />
    <main class="avanti-home-page__main" />
  </div>
</template>

<style scoped>
.avanti-home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--avanti-bg-page);
}

.avanti-home-page__main {
  flex: 1 0 auto;
  width: 100%;
  max-width: var(--avanti-desktop-width);
  min-height: 0;
  margin: 0 auto;
  padding: 0 var(--avanti-desktop-gutter);
  background: var(--avanti-bg-page);
}
</style>
