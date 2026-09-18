<script setup lang="ts">
import { computed } from 'vue'
import iconHome from '@/assets/icons/nav-home.svg'
import iconDocs from '@/assets/icons/nav-docs.svg'
import iconProfile from '@/assets/icons/nav-profile.svg'
import iconChat from '@/assets/icons/nav-chat.svg'
import AvantiLogo from '@/components/avanti_logo.vue'
import AvantiNavItem from '@/components/avanti_nav_item.vue'
import AvantiButton from '@/components/avanti_button.vue'

type NavId = 'home' | 'documenti' | 'profilo'

type Props = {
  activeNav?: NavId
  assistenzaBadge?: number
}

const props = withDefaults(defineProps<Props>(), {
  activeNav: 'home',
  assistenzaBadge: 4,
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
  <header class="avanti-header">
    <div class="avanti-header__inner">
      <div class="avanti-header__brand-nav">
        <AvantiLogo />
        <nav class="avanti-header__nav" aria-label="Main">
          <AvantiNavItem
            v-for="item in navItems"
            :key="item.id"
            :label="item.label"
            :icon-src="item.iconSrc"
            :active="isActive(item.id)"
            @click="onNavClick(item.id)"
          />
        </nav>
      </div>
      <AvantiButton
        label="Assistenza"
        :icon-src="iconChat"
        :badge="assistenzaBadge"
        uppercase
        @click="onAssistenzaClick"
      />
    </div>
  </header>
</template>

<style scoped>
.avanti-header {
  width: 100%;
  border-bottom: 1px solid var(--avanti-border);
  background: var(--avanti-bg);
}

.avanti-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: var(--avanti-desktop-width);
  margin: 0 auto;
  padding: 0 var(--avanti-desktop-gutter);
}

.avanti-header__brand-nav {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: 52px;
  min-width: 0;
  padding: 20px 0;
}

.avanti-header__nav {
  display: flex;
  flex: 1 1 auto;
  gap: 12px;
  max-width: 660px;
  min-width: 0;
}

@media (max-width: 1200px) {
  .avanti-header__inner {
    padding-left: 32px;
    padding-right: 32px;
  }

  .avanti-header__brand-nav {
    gap: 24px;
  }
}
</style>
