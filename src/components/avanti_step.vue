<script setup lang="ts">
import { computed } from 'vue'
import AvantiIcon from '@/components/avanti_icon.vue'
import type { ProgressStatus } from '@/types'

type Props = {
  label: string
  status: ProgressStatus
  iconSrc: string
  showLineAfter?: boolean
  lineAfterActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showLineAfter: false,
  lineAfterActive: false,
})

const rootClass = computed(() => [
  `avanti-step--${props.status}`,
  { 'avanti-step--line': props.showLineAfter },
  { 'avanti-step--line-active': props.showLineAfter && props.lineAfterActive },
])
</script>

<template>
  <li class="avanti-step" :class="rootClass">
    <div class="avanti-step__node" aria-hidden="true">
      <AvantiIcon
        class="avanti-step__icon"
        :src="iconSrc"
        size="md"
      />
    </div>
    <span class="avanti-step__label">{{ label }}</span>
  </li>
</template>

<style scoped>
.avanti-step {
  position: relative;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  gap: var(--avanti-modul);
  min-width: 0;
}

.avanti-step__node {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
}

.avanti-step__label {
  font-size: 0.6875rem;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
}

.avanti-step--done .avanti-step__node {
  background: var(--avanti-teal);
}

.avanti-step--done .avanti-step__label {
  color: var(--avanti-teal);
  font-weight: 600;
}

.avanti-step--current .avanti-step__node {
  border: 2px solid var(--avanti-teal);
  background: var(--avanti-teal-soft);
}

.avanti-step--current .avanti-step__label {
  color: var(--avanti-teal);
  font-weight: 700;
}

.avanti-step--pending .avanti-step__node {
  border: 1.5px solid var(--avanti-zinc-line);
  background: var(--avanti-zinc-bg);
}

.avanti-step--pending .avanti-step__label {
  color: var(--avanti-muted-2);
  font-weight: 500;
}

.avanti-step--line::after {
  content: '';
  position: absolute;
  top: 17px;
  left: calc(50% + 22px);
  right: calc(-50% + 22px);
  z-index: 0;
  height: 2px;
  background: var(--avanti-zinc-line);
}

.avanti-step--line-active::after {
  background: var(--avanti-teal);
}

@media (max-width: 1024px) {
  .avanti-step {
    gap: calc(var(--avanti-modul) * 0.5);
  }

  .avanti-step__node {
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }

  :deep(.avanti-step__icon) {
    width: 12px;
    height: 12px;
  }

  .avanti-step__label {
    font-size: 0.625rem;
  }

  .avanti-step--line::after {
    top: 9px;
    left: calc(50% + 14px);
    right: calc(-50% + 14px);
  }

  .avanti-step--current .avanti-step__node {
    border-width: 1.5px;
  }
}
</style>
