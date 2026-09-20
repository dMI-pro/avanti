<script setup lang="ts">
import AvantiAvatar from '@/components/avanti_avatar.vue'

type Props = {
  initials: string
  avatarSrc: string
  name?: string
}

withDefaults(defineProps<Props>(), {
  name: '',
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
    class="avanti-header-profile"
    type="button"
    :aria-label="name || initials"
    @click="onClick"
  >
    <AvantiAvatar
      :src="avatarSrc"
      :alt="name || initials"
      size="md"
      with-border
    />
    <span class="avanti-header-profile__initials">{{ initials }}</span>
  </button>
</template>

<style scoped>
.avanti-header-profile {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: calc(var(--avanti-modul) * 0.75);
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
}

.avanti-header-profile__initials {
  color: var(--avanti-ink);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
}
</style>
