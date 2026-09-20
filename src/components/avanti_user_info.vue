<script setup lang="ts">
import AvantiAvatar from '@/components/avanti_avatar.vue'

type Props = {
  name: string
  email: string
  avatarSrc: string
}

defineProps<Props>()
</script>

<template>
  <div class="avanti-user-info">
    <AvantiAvatar
      :src="avatarSrc"
      :alt="name"
      size="lg"
    />
    <div class="avanti-user-info__text">
      <p class="avanti-user-info__name">{{ name }}</p>
      <p class="avanti-user-info__email">{{ email }}</p>
    </div>
  </div>
</template>

<style scoped>
.avanti-user-info {
  display: flex;
  align-items: center;
  gap: calc(var(--avanti-modul) * 1.5);
}

.avanti-user-info__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: normal;
  white-space: nowrap;
}

.avanti-user-info__name {
  margin: 0;
  color: var(--avanti-ink);
  font-size: 0.875rem;
  font-weight: 600;
}

.avanti-user-info__email {
  margin: 0;
  color: var(--avanti-muted);
  font-size: 0.75rem;
  font-weight: 400;
}
</style>
