<script setup lang="ts">
import avatarUser from '@/assets/images/avatar-user.jpeg'
import AvantiHeader from '@/components/avanti_header.vue'
import AvantiPageToolbar from '@/components/avanti_page_toolbar.vue'

type NavId = 'home' | 'documenti' | 'profilo'

function onNavigate(_id: NavId) {}

function onAssistenza() {}
</script>

<template>
  <div class="avanti-home-page">
    <AvantiHeader @navigate="onNavigate" @assistenza="onAssistenza" />
    <main class="avanti-home-page__main">
      <AvantiPageToolbar
        user-name="Marco Rossi"
        user-email="ikoei@09gmail.com"
        :avatar-src="avatarUser"
        breadcrumb-root="Piattaforma"
        breadcrumb-current="Home"
      />
    </main>
  </div>
</template>

<style scoped>
.avanti-home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--avanti-bg-page);
}

.avanti-home-page__main {
  flex: 1 0 auto;
  width: 100%;
  max-width: var(--avanti-desktop-width);
  min-height: 0;
  margin: 0 auto;
  padding: 0 var(--avanti-desktop-gutter);
  background: var(--avanti-bg-page);
}

@media (max-width: 1200px) {
  .avanti-home-page__main {
    padding-left: 32px;
    padding-right: 32px;
  }
}
</style>
