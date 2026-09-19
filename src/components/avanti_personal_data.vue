<script setup lang="ts">
type DataRow = {
  label: string
  value: string
}

type Props = {
  title?: string
  rows?: DataRow[]
}

withDefaults(defineProps<Props>(), {
  title: 'Dati personali',
  rows: () => [
    { label: 'Cognome', value: 'Intesa Sanpaolo S.p.A.' },
    { label: 'Nome', value: 'Marco Rossi' },
  ],
})
</script>

<template>
  <section class="avanti-personal-data">
    <h2 class="avanti-personal-data__title">{{ title }}</h2>
    <dl class="avanti-personal-data__list">
      <div v-for="row in rows" :key="row.label" class="avanti-personal-data__row">
        <dt class="avanti-personal-data__label">{{ row.label }}</dt>
        <dd class="avanti-personal-data__value">{{ row.value }}</dd>
      </div>
    </dl>
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

.avanti-personal-data__title {
  margin: 0;
  color: var(--avanti-ink);
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: normal;
}

.avanti-personal-data__list {
  display: flex;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 1.5);
  width: 100%;
  margin: 0;
}

.avanti-personal-data__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(var(--avanti-modul) * 2);
  width: 100%;
}

.avanti-personal-data__label {
  margin: 0;
  color: var(--avanti-muted);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: normal;
}

.avanti-personal-data__value {
  margin: 0;
  color: var(--avanti-ink);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: normal;
  text-align: right;
}
</style>
