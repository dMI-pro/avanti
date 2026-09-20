<script setup lang="ts">
import { computed } from 'vue'
import AvantiBadge from '@/components/avanti_badge.vue'
import AvantiIcon from '@/components/avanti_icon.vue'
import iconBellDefault from '@/assets/icons/icon-bell.svg'

type Props = {
  iconSrc?: string
  badge?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  iconSrc: '',
})

const resolvedIconSrc = computed(() => props.iconSrc || iconBellDefault)

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
    <AvantiIcon
      class="avanti-notification-bell__icon"
      :src="resolvedIconSrc"
      :width="21"
      :height="26"
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
}
</style>
