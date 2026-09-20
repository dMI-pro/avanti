<script setup lang="ts">
type LabelValueRow = {
  label: string
  value: string
  mono?: boolean
}

type Props = {
  rows: LabelValueRow[]
  title?: string
}

defineProps<Props>()
</script>

<template>
  <div class="avanti-label-value-row">
    <h3 v-if="title" class="avanti-label-value-row__title">
      {{ title }}
    </h3>
    <dl class="avanti-label-value-row__list">
      <div
        v-for="row in rows"
        :key="row.label"
        class="avanti-label-value-row__row"
      >
        <dt class="avanti-label-value-row__label">{{ row.label }}</dt>
        <dd
          class="avanti-label-value-row__value"
          :class="{ 'avanti-label-value-row__value--mono': row.mono }"
        >
          {{ row.value }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<style scoped>
.avanti-label-value-row {
  display: flex;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 2);
  width: 100%;
}

.avanti-label-value-row__title {
  margin: 0;
  color: var(--avanti-ink);
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: normal;
}

.avanti-label-value-row__list {
  display: flex;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 1.5);
  width: 100%;
  margin: 0;
}

.avanti-label-value-row__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(var(--avanti-modul) * 2);
  width: 100%;
}

.avanti-label-value-row__label {
  margin: 0;
  color: var(--avanti-muted);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: normal;
}

.avanti-label-value-row__value {
  margin: 0;
  color: var(--avanti-ink);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: normal;
  text-align: right;
}

.avanti-label-value-row__value--mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-variant-numeric: tabular-nums;
}
</style>
