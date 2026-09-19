<script setup lang="ts">
import AvantiBadge from '@/components/avanti_badge.vue'
import iconBell from '@/assets/icons/icon-bell.svg'

type Props = {
  badge?: number | string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  click: []
}>()

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
    <AvantiBadge
      variant="count"
      size="sm"
      color="danger"
      position="top-right"
      :text="badge"
      :with-border="true"
      offset-top="calc(var(--avanti-modul) * 0.25)"
      offset-right="calc(var(--avanti-modul) * 0.375)"
    />
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
</style>
