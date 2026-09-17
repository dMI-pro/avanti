<script setup lang="ts">
import { computed } from 'vue'
import iconHome from '@/assets/icons/nav-home.svg'
import iconDocs from '@/assets/icons/nav-docs.svg'
import iconProfile from '@/assets/icons/nav-profile.svg'
import iconChat from '@/assets/icons/nav-chat.svg'
import avatarUser from '@/assets/images/avatar-user.jpeg'
import AvantiLogo from '@/components/avanti_logo.vue'
import AvantiNavItem from '@/components/avanti_nav_item.vue'
import AvantiButton from '@/components/avanti_button.vue'
import AvantiUserInfo from '@/components/avanti_user_info.vue'
import AvantiBreadcrumb from '@/components/avanti_breadcrumb.vue'

type NavId = 'home' | 'documenti' | 'profilo'

type Props = {
  activeNav?: NavId
  userName?: string
  userEmail?: string
  avatarSrc?: string
  assistenzaBadge?: number
  breadcrumbRoot?: string
  breadcrumbCurrent?: string
}

const props = withDefaults(defineProps<Props>(), {
  activeNav: 'home',
  userName: 'Marco Rossi',
  userEmail: 'ikoei@09gmail.com',
  avatarSrc: avatarUser,
  assistenzaBadge: 4,
  breadcrumbRoot: 'Piattaforma',
  breadcrumbCurrent: 'Home',
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
    <div class="avanti-header__top">
      <div class="avanti-header__top-inner">
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
    </div>

    <div class="avanti-header__bottom">
      <AvantiUserInfo
        :name="userName"
        :email="userEmail"
        :avatar-src="avatarSrc"
      />
      <AvantiBreadcrumb :root="breadcrumbRoot" :current="breadcrumbCurrent" />
    </div>
  </header>
</template>

<style scoped>
.avanti-header {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--avanti-bg-page);
}

.avanti-header__top {
  width: 100%;
  border-bottom: 1px solid var(--avanti-border);
  background: var(--avanti-bg);
}

.avanti-header__top-inner {
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

.avanti-header__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: var(--avanti-desktop-width);
  margin: 0 auto;
  padding: 10px var(--avanti-desktop-gutter);
  background: var(--avanti-bg-page);
}

@media (max-width: 1200px) {
  .avanti-header__top-inner,
  .avanti-header__bottom {
    padding-left: 32px;
    padding-right: 32px;
  }

  .avanti-header__brand-nav {
    gap: 24px;
  }
}
</style>
