<script setup lang="ts">
import { computed } from 'vue'
import iconChat from '@/assets/icons/nav-chat.svg'

type Props = {
  label?: string
  badgeCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Assistenza',
  badgeCount: 0,
})

const emit = defineEmits<{
  click: []
}>()

const hasBadge = computed(() => props.badgeCount > 0)

function onClick() {
  emit('click')
}
</script>

<template>
  <button class="avanti-assistenza" type="button" @click="onClick">
    <span class="avanti-assistenza__icon" aria-hidden="true">
      <img :src="iconChat" alt="" width="16" height="16" />
    </span>
    <span class="avanti-assistenza__label">{{ label }}</span>
    <span v-if="hasBadge" class="avanti-assistenza__badge" aria-hidden="true">
      {{ badgeCount }}
    </span>
  </button>
</template>

<style scoped>
.avanti-assistenza {
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border: none;
  border-radius: var(--avanti-radius-sm);
  background: var(--avanti-teal);
  color: var(--avanti-white);
  cursor: pointer;
}

.avanti-assistenza__icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  overflow: hidden;
}

.avanti-assistenza__icon img {
  width: 16px;
  height: 16px;
}

.avanti-assistenza__label {
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  white-space: nowrap;
}

.avanti-assistenza__badge {
  position: absolute;
  top: -10px;
  right: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: 2px solid var(--avanti-white);
  border-radius: 11px;
  background: var(--avanti-danger);
  color: var(--avanti-white);
  font-size: 11px;
  font-weight: 700;
  line-height: normal;
}
</style>
