<script setup lang="ts">
type Props = {
  root: string
  current: string
}

defineProps<Props>()
</script>

<template>
  <nav class="avanti-breadcrumb" aria-label="Breadcrumb">
    <span class="avanti-breadcrumb__root">{{ root }}</span>
    <span class="avanti-breadcrumb__sep" aria-hidden="true">/</span>
    <span class="avanti-breadcrumb__current">{{ current }}</span>
  </nav>
</template>

<style scoped>
.avanti-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: normal;
  white-space: nowrap;
}

.avanti-breadcrumb__root {
  color: var(--avanti-muted);
  font-weight: 500;
}

.avanti-breadcrumb__sep {
  color: var(--avanti-muted-2);
  font-weight: 500;
}

.avanti-breadcrumb__current {
  color: var(--avanti-ink);
  font-weight: 600;
}
</style>
