<script setup lang="ts">
import AvantiIcon from '@/components/avanti_icon.vue'
import type { ProgressStatus } from '@/types'

type Props = {
  title: string
  statusText: string
  status: ProgressStatus
  iconSrc: string
  actionIconSrc: string
}

defineProps<Props>()

const emit = defineEmits<{
  click: []
}>()

function onClick() {
  emit('click')
}
</script>

<template>
  <button
    v-if="status === 'current'"
    class="avanti-checklist-item avanti-checklist-item--current"
    type="button"
    @click="onClick"
  >
    <AvantiIcon
      class="avanti-checklist-item__icon"
      :src="iconSrc"
      size="lg"
    />
    <span class="avanti-checklist-item__text">
      <span class="avanti-checklist-item__title">{{ title }}</span>
      <span class="avanti-checklist-item__status">{{ statusText }}</span>
    </span>
    <AvantiIcon
      class="avanti-checklist-item__action"
      :src="actionIconSrc"
      :width="13"
      :height="13"
    />
  </button>

  <div
    v-else
    class="avanti-checklist-item"
    :class="`avanti-checklist-item--${status}`"
  >
    <AvantiIcon
      class="avanti-checklist-item__icon"
      :src="iconSrc"
      size="lg"
    />
    <span class="avanti-checklist-item__text">
      <span class="avanti-checklist-item__title">{{ title }}</span>
      <span class="avanti-checklist-item__status">{{ statusText }}</span>
    </span>
    <AvantiIcon
      class="avanti-checklist-item__action"
      :src="actionIconSrc"
      :width="13"
      :height="13"
    />
  </div>
</template>

<style scoped>
.avanti-checklist-item {
  display: flex;
  align-items: center;
  gap: calc(var(--avanti-modul) * 1.5);
  width: 100%;
  padding: calc(var(--avanti-modul) * 2);
  border: none;
  background: transparent;
  text-align: left;
}

button.avanti-checklist-item {
  cursor: pointer;
}

.avanti-checklist-item__icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 22px;
}

.avanti-checklist-item__text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 0.25);
  min-width: 0;
}

.avanti-checklist-item__title {
  color: var(--avanti-ink);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: normal;
}

.avanti-checklist-item__status {
  color: var(--avanti-teal);
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: normal;
}

.avanti-checklist-item__action {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 14px;
}

.avanti-checklist-item--done .avanti-checklist-item__icon,
.avanti-checklist-item--done .avanti-checklist-item__action {
  background: var(--avanti-teal);
}

.avanti-checklist-item--current {
  background: transparent;
}

.avanti-checklist-item--current .avanti-checklist-item__icon {
  border: 2.5px solid var(--avanti-teal);
  background: var(--avanti-bg);
}

.avanti-checklist-item--current .avanti-checklist-item__title {
  font-weight: 700;
}

.avanti-checklist-item--current .avanti-checklist-item__status {
  font-weight: 600;
}

.avanti-checklist-item--current .avanti-checklist-item__action {
  background: var(--avanti-teal);
}

.avanti-checklist-item--pending .avanti-checklist-item__icon,
.avanti-checklist-item--pending .avanti-checklist-item__action {
  background: var(--avanti-zinc-bg);
}

.avanti-checklist-item--pending .avanti-checklist-item__title {
  color: var(--avanti-muted);
  font-weight: 500;
}

.avanti-checklist-item--pending .avanti-checklist-item__status {
  color: var(--avanti-muted-2);
  font-weight: 400;
}

@media (max-width: 1024px) {
  .avanti-checklist-item__icon {
    width: 36px;
    height: 36px;
    border-radius: 18px;
  }

  .avanti-checklist-item__icon,
  :deep(.avanti-checklist-item__icon img) {
    width: 16px;
    height: 16px;
  }

  .avanti-checklist-item__title {
    font-size: 0.8125rem;
  }

  .avanti-checklist-item--current {
    background: var(--avanti-teal-soft);
  }

  .avanti-checklist-item--current .avanti-checklist-item__icon {
    border-width: 2px;
  }

  .avanti-checklist-item--done .avanti-checklist-item__action {
    width: 22px;
    height: 22px;
    border-radius: 11px;
  }

  .avanti-checklist-item--done .avanti-checklist-item__action,
  .avanti-checklist-item--done :deep(.avanti-checklist-item__action img) {
    width: 10px;
    height: 10px;
  }
}
</style>
