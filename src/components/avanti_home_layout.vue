<script setup lang="ts"></script>

<template>
  <div class="avanti-home-layout">
    <div class="avanti-home-layout__left">
      <section class="avanti-home-layout__block avanti-home-layout__block--steps" />
      <section class="avanti-home-layout__block avanti-home-layout__block--balance" />
      <section class="avanti-home-layout__block avanti-home-layout__block--banner" />
    </div>

    <div class="avanti-home-layout__right">
      <section class="avanti-home-layout__block avanti-home-layout__block--personal" />
      <section class="avanti-home-layout__block avanti-home-layout__block--checklist" />
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

.avanti-home-layout__block {
  width: 100%;
  border-radius: var(--avanti-radius-lg);
}

.avanti-home-layout__block--steps {
  min-height: 130px;
  border: 1px solid var(--avanti-teal-muted-border);
  background: var(--avanti-bg);
  box-shadow: var(--avanti-shadow-card);
}

.avanti-home-layout__block--balance {
  min-height: 340px;
  background: var(--avanti-gradient-balance);
  box-shadow: var(--avanti-shadow-balance);
}

.avanti-home-layout__block--banner {
  min-height: 124px;
  border: 1px solid var(--avanti-teal-border);
  background: var(--avanti-teal-soft);
}

.avanti-home-layout__block--personal {
  min-height: 131px;
  border: 1px solid var(--avanti-border);
  background: var(--avanti-bg);
}

.avanti-home-layout__block--checklist {
  min-height: 483px;
  border: 1px solid var(--avanti-border);
  background: var(--avanti-bg);
  box-shadow: 0 4px 16px rgba(26, 35, 50, 0.03);
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

  .avanti-home-layout__block--personal {
    display: none;
  }

  .avanti-home-layout__block--steps {
    min-height: 112px;
  }

  .avanti-home-layout__block--balance {
    min-height: 280px;
    border-radius: var(--avanti-radius-lg);
  }

  .avanti-home-layout__block--banner {
    min-height: 140px;
  }

  .avanti-home-layout__block--checklist {
    min-height: 420px;
  }
}
</style>
