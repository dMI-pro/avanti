<script setup lang="ts">
import { computed } from 'vue'
import iconBell from '@/assets/icons/icon-bell.svg'

type Props = {
  badge?: number | string
}

const props = defineProps<Props>()

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
  emit('click')
}
</script>

<template>
  <button
    class="avanti-notification-bell"
    type="button"
    aria-label="Notifiche"
    @click="onClick"
  >
    <img
      class="avanti-notification-bell__icon"
      :src="iconBell"
      alt=""
      width="22"
      height="26"
    />
    <span v-if="hasBadge" class="avanti-notification-bell__badge" aria-hidden="true">
      {{ badge }}
    </span>
  </button>
</template>

<style scoped>
.avanti-notification-bell {
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  overflow: visible;
}

.avanti-notification-bell__icon {
  width: 21px;
  height: 26px;
  object-fit: contain;
}

.avanti-notification-bell__badge {
  position: absolute;
  top: 2px;
  right: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 12px;
  height: 12px;
  padding: 0 3px;
  border: 1px solid var(--avanti-white);
  border-radius: 6px;
  background: var(--avanti-danger);
  color: var(--avanti-white);
  font-size: 6px;
  font-weight: 700;
  line-height: 1;
}
</style>
