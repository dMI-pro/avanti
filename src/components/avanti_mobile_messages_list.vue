<script setup lang="ts">
import AvantiBadge from '@/components/avanti_badge.vue'
import AvantiAvatar from '@/components/avanti_avatar.vue'

type Props = {
  avatarSrc: string
  badge?: number | string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  badge: 2,
  label: 'Messaggi',
})

const emit = defineEmits<{
  click: []
}>()

function onClick() {
  emit('click')
}
</script>

<template>
  <div class="avanti-mobile-messages-list">
    <button
      class="avanti-mobile-messages-list__button"
      type="button"
      :aria-label="label"
      @click="onClick"
    >
      <AvantiAvatar
        class="avanti-mobile-messages-list__avatar"
        :src="avatarSrc"
        alt=""
        :width="57"
        :height="57"
      />
      <AvantiBadge
        variant="count"
        size="lg"
        color="dark-red"
        position="top-right"
        :text="badge"
        offset-top="calc(var(--avanti-modul) * -1.75)"
        offset-right="calc(var(--avanti-modul) * -1.25)"
      />
    </button>
  </div>
</template>

<style scoped>
.avanti-mobile-messages-list {
  display: none;
}

@media (max-width: 1024px) {
  .avanti-mobile-messages-list {
    position: fixed;
    right: calc(var(--avanti-modul) * 2.5);
    bottom: calc(var(--avanti-modul) * 11.875);
    z-index: 40;
    display: block;
  }

  .avanti-mobile-messages-list__button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 57px;
    height: 57px;
    margin: 0;
    padding: 0;
    border: 1.8px solid var(--avanti-teal);
    border-radius: var(--avanti-radius-circle);
    background: transparent;
    cursor: pointer;
    overflow: visible;
    animation: avanti-mobile-messages-list-pulse 2.5s ease-in-out infinite;
  }

  .avanti-mobile-messages-list__avatar {
    width: 100% !important;
    height: 100% !important;
  }
}

@keyframes avanti-mobile-messages-list-pulse {
  0%,
  100% {
    box-shadow: var(--avanti-shadow-pulse-lo);
  }

  25%,
  75% {
    box-shadow: var(--avanti-shadow-pulse-hi);
  }

  50% {
    box-shadow: var(--avanti-shadow-pulse-lo);
  }
}
</style>
