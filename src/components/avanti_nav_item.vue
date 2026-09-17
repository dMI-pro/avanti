<script setup lang="ts">
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
    <span class="avanti-nav-item__icon" aria-hidden="true">
      <img :src="iconSrc" alt="" width="16" height="16" />
    </span>
    <span class="avanti-nav-item__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.avanti-nav-item {
  display: flex;
  flex: 1 1 0;
  align-items: center;
  gap: 12px;
  min-width: max-content;
  padding: 10px 12px;
  border: 1px solid var(--avanti-teal-soft);
  border-radius: var(--avanti-radius-sm);
  background: var(--avanti-bg-page);
  color: var(--avanti-ink);
  font-size: 14px;
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
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  overflow: hidden;
}

.avanti-nav-item__icon img {
  width: 16px;
  height: 16px;
}

.avanti-nav-item__label {
  white-space: nowrap;
}
</style>
