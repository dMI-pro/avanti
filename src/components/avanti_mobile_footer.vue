<script setup lang="ts">
import { computed } from 'vue'
import AvantiMobileFooterItem from '@/components/avanti_mobile_footer_item.vue'
import AvantiIcon from '@/components/avanti_icon.vue'
import { MAIN_NAV, ASSISTENZA_ICON } from '@/constants/nav'
import type { NavId } from '@/types'

type Props = {
  activeNav?: NavId
}

const props = withDefaults(defineProps<Props>(), {
  activeNav: 'home',
})

const emit = defineEmits<{
  navigate: [id: NavId]
  assistenza: []
}>()

const navItems = computed(() =>
  MAIN_NAV.map((item) => ({
    id: item.id,
    label: item.label,
    iconSrc: item.icon.mobile,
  })),
)

function isActive(id: NavId) {
  return props.activeNav === id
}

function onNavClick(id: NavId) {
  emit('navigate', id)
}

function onAssistenzaClick() {
  emit('assistenza')
}
</script>

<template>
  <footer class="avanti-mobile-footer">
    <nav class="avanti-mobile-footer__nav" aria-label="Mobile">
      <AvantiMobileFooterItem
        v-for="item in navItems"
        :key="item.id"
        :label="item.label"
        :icon-src="item.iconSrc"
        :active="isActive(item.id)"
        @click="onNavClick(item.id)"
      />

      <button
        class="avanti-mobile-footer__assistenza"
        type="button"
        @click="onAssistenzaClick"
      >
        <AvantiIcon
          class="avanti-mobile-footer__assistenza-icon"
          :src="ASSISTENZA_ICON"
          :width="14"
          :height="14"
        />
        <span class="avanti-mobile-footer__assistenza-label">Assistenza</span>
      </button>
    </nav>
  </footer>
</template>

<style scoped>
.avanti-mobile-footer {
  display: none;
}

@media (max-width: 1024px) {
  .avanti-mobile-footer {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    display: block;
    border-top: calc(var(--avanti-modul) * 0.25) solid var(--avanti-teal);
    background: var(--avanti-bg);
  }

  .avanti-mobile-footer__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(var(--avanti-modul) * 7.75);
    padding: 0 calc(var(--avanti-modul) * 2.5);
  }

  .avanti-mobile-footer__assistenza {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: calc(var(--avanti-modul) * 0.5);
    width: calc(var(--avanti-modul) * 13.5);
    height: calc(var(--avanti-modul) * 5.375);
    padding: calc(var(--avanti-modul) * 0.5) calc(var(--avanti-modul) * 2);
    border: none;
    border-radius: var(--avanti-radius-sm);
    background: var(--avanti-teal);
    cursor: pointer;
  }

  .avanti-mobile-footer__assistenza-icon {
    width: calc(var(--avanti-modul) * 2);
    height: calc(var(--avanti-modul) * 2);
  }

  .avanti-mobile-footer__assistenza-label {
    color: var(--avanti-white);
    font-size: 0.75rem;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    white-space: nowrap;
  }
}
</style>
