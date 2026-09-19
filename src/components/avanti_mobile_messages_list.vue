<script setup lang="ts">
import { computed } from 'vue'

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
  <div class="avanti-messages-list">
    <button
      class="avanti-messages-list__button"
      type="button"
      :aria-label="label"
      @click="onClick"
    >
      <img
        class="avanti-messages-list__avatar"
        :src="avatarSrc"
        alt=""
        width="57"
        height="57"
      />
      <span v-if="hasBadge" class="avanti-messages-list__badge" aria-hidden="true">
        {{ badge }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.avanti-messages-list {
  display: none;
}

@media (max-width: 1024px) {
  .avanti-messages-list {
    position: fixed;
    right: 12px;
    bottom: 78px;
    z-index: 40;
    display: block;
  }

  .avanti-messages-list__button {
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
    animation: avanti-messages-list-pulse 2.5s ease-in-out infinite;
  }

  .avanti-messages-list__avatar {
    width: 100%;
    height: 100%;
    border-radius: var(--avanti-radius-circle);
    object-fit: cover;
    pointer-events: none;
  }

  .avanti-messages-list__badge {
    position: absolute;
    top: -14px;
    left: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 18px;
    background: var(--avanti-badge-dark-red);
    color: var(--avanti-white);
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
  }
}

@keyframes avanti-messages-list-pulse {
  0%,
  100% {
    box-shadow: 0 0 4px 1px rgba(36, 145, 170, 0.4);
  }

  25%,
  75% {
    box-shadow: 0 0 14px 4px rgba(36, 145, 170, 0.85);
  }

  50% {
    box-shadow: 0 0 4px 1px rgba(36, 145, 170, 0.4);
  }
}
</style>
