<script setup lang="ts">
import AvantiHeader from '@/components/avanti_header.vue'
import AvantiPageToolbar from '@/components/avanti_page_toolbar.vue'
import AvantiHomeLayout from '@/components/avanti_home_layout.vue'
import AvantiMobileFooter from '@/components/avanti_mobile_footer.vue'
import AvantiMobileMessagesList from '@/components/avanti_mobile_messages_list.vue'
import AvantiSteps from '@/components/avanti_steps.vue'
import AvantiBalanceCard from '@/components/avanti_balance_card.vue'
import AvantiProgressBanner from '@/components/avanti_progress_banner.vue'
import AvantiPersonalData from '@/components/avanti_personal_data.vue'
import AvantiChecklist from '@/components/avanti_checklist.vue'
import {
  balanceCardMock,
  stepsMock,
  checklistMock,
  progressBannerMock,
  personalDataMock,
  headerMock,
  pageToolbarMock,
  mobileMessagesMock,
} from '@/mocks/home'
import type { NavId } from '@/types'

function onNavigate(_id: NavId) {
  if (import.meta.env.DEV) {
    console.warn('[AvantiHomePage] onNavigate handler called but not implemented')
  }
}

function onAssistenza() {
  if (import.meta.env.DEV) {
    console.warn('[AvantiHomePage] onAssistenza handler called but not implemented')
  }
}

function onNotifications() {
  if (import.meta.env.DEV) {
    console.warn('[AvantiHomePage] onNotifications handler called but not implemented')
  }
}

function onProfile() {
  if (import.meta.env.DEV) {
    console.warn('[AvantiHomePage] onProfile handler called but not implemented')
  }
}

function onMessages() {
  if (import.meta.env.DEV) {
    console.warn('[AvantiHomePage] onMessages handler called but not implemented')
  }
}
</script>

<template>
  <div class="avanti-home-page">
    <AvantiHeader
      v-bind="headerMock"
      @navigate="onNavigate"
      @assistenza="onAssistenza"
      @notifications="onNotifications"
      @profile="onProfile"
    />
    <main class="avanti-home-page__main">
      <div class="avanti-home-page__toolbar">
        <AvantiPageToolbar v-bind="pageToolbarMock" />
      </div>
      <AvantiHomeLayout>
        <template #left>
          <AvantiSteps v-bind="stepsMock" />
          <AvantiBalanceCard v-bind="balanceCardMock" />
          <AvantiProgressBanner v-bind="progressBannerMock" />
        </template>
        <template #right-top><AvantiPersonalData v-bind="personalDataMock" /></template>
        <template #right-bottom><AvantiChecklist v-bind="checklistMock" /></template>
      </AvantiHomeLayout>
    </main>
    <AvantiMobileMessagesList v-bind="mobileMessagesMock" @click="onMessages" />
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
    padding: calc(var(--avanti-modul) * 2) var(--avanti-mobile-pad) calc(var(--avanti-modul) * 7.25);
  }
}
</style>
