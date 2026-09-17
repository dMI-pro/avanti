<script setup lang="ts">
type Props = {
  name: string
  email: string
  avatarSrc: string
}

defineProps<Props>()
</script>

<template>
  <div class="avanti-user-info">
    <img
      class="avanti-user-info__avatar"
      :src="avatarSrc"
      :alt="name"
      width="40"
      height="40"
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
  gap: 12px;
}

.avanti-user-info__avatar {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 20px;
  object-fit: cover;
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
  font-size: 14px;
  font-weight: 600;
}

.avanti-user-info__email {
  margin: 0;
  color: var(--avanti-muted);
  font-size: 12px;
  font-weight: 400;
}
</style>
