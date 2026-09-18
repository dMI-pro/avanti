<script setup lang="ts">
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
    <img
      class="avanti-header-profile__avatar"
      :src="avatarSrc"
      :alt="name || initials"
      width="32"
      height="32"
    />
    <span class="avanti-header-profile__initials">{{ initials }}</span>
  </button>
</template>

<style scoped>
.avanti-header-profile {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
}

.avanti-header-profile__avatar {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: 1px solid var(--avanti-teal);
  border-radius: 16px;
  object-fit: cover;
}

.avanti-header-profile__initials {
  color: var(--avanti-ink);
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
}
</style>
