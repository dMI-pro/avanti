<script setup lang="ts">
import avatarUser from '@/assets/images/avatar-user.jpeg'
import avatarSupport from '@/assets/images/avatar-support.png'
import AvantiHeader from '@/components/avanti_header.vue'
import AvantiPageToolbar from '@/components/avanti_page_toolbar.vue'
import AvantiHomeLayout from '@/components/avanti_home_layout.vue'
import AvantiMobileFooter from '@/components/avanti_mobile_footer.vue'
import AvantiMobileMessagesList from '@/components/avanti_mobile_messages_list.vue'

type NavId = 'home' | 'documenti' | 'profilo'

function onNavigate(_id: NavId) {}

function onAssistenza() {}

function onNotifications() {}

function onProfile() {}

function onMessages() {}
</script>

<template>
  <div class="avanti-home-page">
    <AvantiHeader
      :avatar-src="avatarUser"
      user-name="Marco Rossi"
      user-initials="MR"
      @navigate="onNavigate"
      @assistenza="onAssistenza"
      @notifications="onNotifications"
      @profile="onProfile"
    />
    <main class="avanti-home-page__main">
      <div class="avanti-home-page__toolbar">
        <AvantiPageToolbar
          user-name="Marco Rossi"
          user-email="ikoei@09gmail.com"
          :avatar-src="avatarUser"
          breadcrumb-root="Piattaforma"
          breadcrumb-current="Home"
        />
      </div>
      <AvantiHomeLayout />
    </main>
    <AvantiMobileMessagesList :avatar-src="avatarSupport" :badge="2" @click="onMessages" />
    <AvantiMobileFooter active-nav="home" @navigate="onNavigate" @assistenza="onAssistenza" />
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
    padding-left: calc(var(--avanti-modul) * 4);
    padding-right: calc(var(--avanti-modul) * 4);
  }
}

@media (max-width: 1024px) {
  .avanti-home-page__toolbar {
    display: none;
  }

  .avanti-home-page__main {
    padding: calc(var(--avanti-modul) * 2) var(--avanti-mobile-pad) calc(var(--avanti-modul) * 10.75);
  }
}
</style>
