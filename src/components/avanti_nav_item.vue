<script setup lang="ts">
import AvantiIcon from '@/components/avanti_icon.vue'

type Props = {
  label: string
  iconSrc: string
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
})

const emit = defineEmits<{
  click: []
}>()

function onClick() {
  emit('click')
}
</script>

<template>
  <button
    class="avanti-nav-item"
    type="button"
    :class="{ 'avanti-nav-item--active': props.active }"
    @click="onClick"
  >
    <AvantiIcon
      class="avanti-nav-item__icon"
      :src="iconSrc"
      size="md"
    />
    <span class="avanti-nav-item__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.avanti-nav-item {
  display: flex;
  flex: 1 1 0;
  align-items: center;
  gap: calc(var(--avanti-modul) * 1.5);
  min-width: max-content;
  padding: calc(var(--avanti-modul) * 1.25) calc(var(--avanti-modul) * 1.5);
  border: 1px solid var(--avanti-teal-soft);
  border-radius: var(--avanti-radius-sm);
  background: var(--avanti-bg-page);
  color: var(--avanti-ink);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  white-space: nowrap;
}

.avanti-nav-item--active {
  border-color: transparent;
  background: var(--avanti-teal-soft);
  color: var(--avanti-teal);
  font-weight: 600;
}

.avanti-nav-item__icon {
  width: calc(var(--avanti-modul) * 2);
  height: calc(var(--avanti-modul) * 2);
}

.avanti-nav-item__label {
  white-space: nowrap;
}
</style>
