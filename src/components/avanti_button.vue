<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  label: string
  iconSrc?: string
  badge?: number | string
  disabled?: boolean
  uppercase?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  uppercase: false,
})

const emit = defineEmits<{
  click: []
}>()

const hasBadge = computed(() => {
  if (props.badge === undefined || props.badge === null || props.badge === '') {
    return false
  }

  if (typeof props.badge === 'number') {
    return props.badge > 0
  }

  return true
})

function onClick() {
  if (props.disabled) return
  emit('click')
}
</script>

<template>
  <button
    class="avanti-button"
    type="button"
    :class="{ 'avanti-button--uppercase': uppercase }"
    :disabled="disabled"
    @click="onClick"
  >
    <span v-if="iconSrc" class="avanti-button__icon" aria-hidden="true">
      <img :src="iconSrc" alt="" width="16" height="16" />
    </span>
    <span class="avanti-button__label">{{ label }}</span>
    <span v-if="hasBadge" class="avanti-button__badge" aria-hidden="true">
      {{ badge }}
    </span>
  </button>
</template>

<style scoped>
.avanti-button {
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: calc(var(--avanti-modul) * 1.5);
  padding: calc(var(--avanti-modul) * 1.25) calc(var(--avanti-modul) * 1.5);
  border: none;
  border-radius: var(--avanti-radius-sm);
  background: var(--avanti-teal);
  color: var(--avanti-white);
  cursor: pointer;
}

.avanti-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.avanti-button__icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  overflow: hidden;
}

.avanti-button__icon img {
  width: 16px;
  height: 16px;
}

.avanti-button__label {
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
}

.avanti-button--uppercase .avanti-button__label {
  text-transform: uppercase;
}

.avanti-button__badge {
  position: absolute;
  top: calc(var(--avanti-modul) * -1.25);
  right: calc(var(--avanti-modul) * -0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: calc(var(--avanti-modul) * 0.25) solid var(--avanti-white);
  border-radius: 11px;
  background: var(--avanti-danger);
  color: var(--avanti-white);
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: normal;
}
</style>
