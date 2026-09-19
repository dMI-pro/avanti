<script setup lang="ts">
import { computed } from 'vue'
import iconHome from '@/assets/icons/nav-home-mobile.svg'
import iconDocs from '@/assets/icons/nav-docs-mobile.svg'
import iconProfile from '@/assets/icons/nav-profile-mobile.svg'
import iconChat from '@/assets/icons/nav-chat.svg'
import AvantiMobileFooterItem from '@/components/avanti_mobile_footer_item.vue'

type NavId = 'home' | 'documenti' | 'profilo'

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

const navItems = computed(() => [
  { id: 'home' as const, label: 'Home', iconSrc: iconHome },
  { id: 'documenti' as const, label: 'Documenti', iconSrc: iconDocs },
  { id: 'profilo' as const, label: 'Profilo', iconSrc: iconProfile },
])

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
        <span class="avanti-mobile-footer__assistenza-icon" aria-hidden="true">
          <img :src="iconChat" alt="" width="14" height="14" />
        </span>
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
    border-top: 2px solid var(--avanti-teal);
    background: var(--avanti-bg);
  }

  .avanti-mobile-footer__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 62px;
    padding: 0 calc(var(--avanti-modul) * 2.5);
  }

  .avanti-mobile-footer__assistenza {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: calc(var(--avanti-modul) * 0.5);
    width: 108px;
    height: 43px;
    padding: calc(var(--avanti-modul) * 0.5) calc(var(--avanti-modul) * 2);
    border: none;
    border-radius: var(--avanti-radius-sm);
    background: var(--avanti-teal);
    cursor: pointer;
  }

  .avanti-mobile-footer__assistenza-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }

  .avanti-mobile-footer__assistenza-icon img {
    width: 14px;
    height: 14px;
    object-fit: contain;
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
