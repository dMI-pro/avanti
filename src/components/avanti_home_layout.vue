<script setup lang="ts">
import AvantiSteps from '@/components/avanti_steps.vue'
import AvantiBalanceCard from '@/components/avanti_balance_card.vue'
import AvantiProgressBanner from '@/components/avanti_progress_banner.vue'
import AvantiPersonalData from '@/components/avanti_personal_data.vue'
import AvantiChecklist from '@/components/avanti_checklist.vue'
</script>

<template>
  <div class="avanti-home-layout">
    <div class="avanti-home-layout__left">
      <AvantiSteps />
      <AvantiBalanceCard />
      <AvantiProgressBanner />
    </div>

    <div class="avanti-home-layout__right">
      <div class="avanti-home-layout__personal">
        <AvantiPersonalData />
      </div>
      <AvantiChecklist />
    </div>
  </div>
</template>

<style scoped>
.avanti-home-layout {
  display: flex;
  align-items: flex-start;
  gap: var(--avanti-desktop-gap-cols);
  width: 100%;
  padding-bottom: 40px;
}

.avanti-home-layout__left,
.avanti-home-layout__right {
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 0;
}

.avanti-home-layout__left {
  flex: 1 1 auto;
}

.avanti-home-layout__right {
  flex: 0 0 var(--avanti-right-col);
  width: var(--avanti-right-col);
}

@media (max-width: 1024px) {
  .avanti-home-layout {
    flex-direction: column;
    gap: 20px;
    padding-bottom: 24px;
  }

  .avanti-home-layout__left,
  .avanti-home-layout__right {
    width: 100%;
    flex: none;
    gap: 20px;
  }

  .avanti-home-layout__personal {
    display: none;
  }
}
</style>
