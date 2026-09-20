<script setup lang="ts">
import AvantiLabelValueRow from '@/components/avanti_label_value_row.vue'

type DataRow = {
  label: string
  value: string
  mono?: boolean
}

type Props = {
  title?: string
  rows?: DataRow[]
}

withDefaults(defineProps<Props>(), {
  title: '',
  rows: () => [],
})
</script>

<template>
  <section class="avanti-personal-data">
    <AvantiLabelValueRow :title="title" :rows="rows" />
  </section>
</template>

<style scoped>
.avanti-personal-data {
  display: flex;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 2);
  width: 100%;
  padding: calc(var(--avanti-modul) * 3);
  border: 1px solid var(--avanti-border);
  border-radius: var(--avanti-radius-lg);
  background: var(--avanti-bg);
}
</style>
