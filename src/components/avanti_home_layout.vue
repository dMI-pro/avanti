<script setup lang="ts">
</script>

<template>
  <div class="avanti-home-layout">
    <div class="avanti-home-layout__left">
      <slot name="left" />
    </div>

    <div class="avanti-home-layout__right">
      <div class="avanti-home-layout__personal">
        <slot name="right-top" />
      </div>
      <slot name="right-bottom" />
    </div>
  </div>
</template>

<style scoped>
.avanti-home-layout {
  display: flex;
  align-items: flex-start;
  gap: var(--avanti-desktop-gap-cols);
  width: 100%;
  padding-bottom: calc(var(--avanti-modul) * 5);
}

.avanti-home-layout__left,
.avanti-home-layout__right {
  display: flex;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 4);
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
    gap: calc(var(--avanti-modul) * 2.5);
    padding-bottom: calc(var(--avanti-modul) * 3);
  }

  .avanti-home-layout__left,
  .avanti-home-layout__right {
    width: 100%;
    flex: none;
    gap: calc(var(--avanti-modul) * 2.5);
  }

  .avanti-home-layout__personal {
    display: none;
  }
}
</style>
