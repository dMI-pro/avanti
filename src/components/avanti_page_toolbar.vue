<script setup lang="ts">
import AvantiUserInfo from '@/components/avanti_user_info.vue'
import AvantiBreadcrumb from '@/components/avanti_breadcrumb.vue'

type Props = {
  userName: string
  userEmail: string
  avatarSrc: string
  breadcrumbRoot: string
  breadcrumbCurrent: string
}

defineProps<Props>()
</script>

<template>
  <div class="avanti-page-toolbar">
    <AvantiUserInfo :name="userName" :email="userEmail" :avatar-src="avatarSrc" />
    <AvantiBreadcrumb :root="breadcrumbRoot" :current="breadcrumbCurrent" />
  </div>
</template>

<style scoped>
.avanti-page-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  padding: 10px 0;
  background: var(--avanti-bg-page);
}
</style>
