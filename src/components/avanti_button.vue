<script setup lang="ts">
import AvantiBadge from '@/components/avanti_badge.vue'
import AvantiIcon from '@/components/avanti_icon.vue'

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
    <AvantiIcon
      v-if="iconSrc"
      class="avanti-button__icon"
      :src="iconSrc"
      size="xl"
    />
    <span class="avanti-button__label">{{ label }}</span>
    <AvantiBadge
      variant="count"
      size="md"
      color="danger"
      position="top-right"
      :text="badge"
      :with-border="true"
      offset-top="calc(var(--avanti-modul) * -1.25)"
      offset-right="calc(var(--avanti-modul) * -0.75)"
    />
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
  width: calc(var(--avanti-modul) * 3.5);
  height: calc(var(--avanti-modul) * 3.5);
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
</style>
