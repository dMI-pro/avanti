<script setup lang="ts">
type Props = {
  label: string
  iconSrc: string
  active?: boolean
}

withDefaults(defineProps<Props>(), {
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
    class="avanti-mobile-footer-item"
    type="button"
    :class="{ 'avanti-mobile-footer-item--active': active }"
    @click="onClick"
  >
    <span class="avanti-mobile-footer-item__icon" aria-hidden="true">
      <img :src="iconSrc" alt="" width="18" height="18" />
    </span>
    <span class="avanti-mobile-footer-item__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.avanti-mobile-footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: var(--avanti-radius-sm);
  background: transparent;
  color: var(--avanti-ink);
  cursor: pointer;
}

.avanti-mobile-footer-item--active {
  color: var(--avanti-teal);
}

.avanti-mobile-footer-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.avanti-mobile-footer-item__icon img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.avanti-mobile-footer-item__label {
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
}

.avanti-mobile-footer-item--active .avanti-mobile-footer-item__label {
  font-weight: 600;
}
</style>
