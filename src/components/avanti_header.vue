<script setup lang="ts">
import { computed } from 'vue'
import iconHome from '@/assets/icons/nav-home.svg'
import iconDocs from '@/assets/icons/nav-docs.svg'
import iconProfile from '@/assets/icons/nav-profile.svg'
import iconChat from '@/assets/icons/nav-chat.svg'
import AvantiLogo from '@/components/avanti_logo.vue'
import AvantiNavItem from '@/components/avanti_nav_item.vue'
import AvantiButton from '@/components/avanti_button.vue'
import AvantiNotificationBell from '@/components/avanti_notification_bell.vue'
import AvantiHeaderProfile from '@/components/avanti_header_profile.vue'

type NavId = 'home' | 'documenti' | 'profilo'

type Props = {
  activeNav?: NavId
  assistenzaBadge?: number
  notificationBadge?: number
  avatarSrc?: string
  userInitials?: string
  userName?: string
}

const props = withDefaults(defineProps<Props>(), {
  activeNav: 'home',
  assistenzaBadge: 4,
  notificationBadge: 4,
  avatarSrc: '',
  userInitials: 'MR',
  userName: '',
})

const emit = defineEmits<{
  navigate: [id: NavId]
  assistenza: []
  notifications: []
  profile: []
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

function onNotificationsClick() {
  emit('notifications')
}

function onProfileClick() {
  emit('profile')
}
</script>

<template>
  <header class="avanti-header">
    <div class="avanti-header__inner">
      <div class="avanti-header__brand-nav">
        <div class="avanti-header__logo-desktop">
          <AvantiLogo />
        </div>
        <div class="avanti-header__logo-mobile">
          <AvantiLogo compact />
        </div>
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

      <div class="avanti-header__assistenza">
        <AvantiButton
          label="Assistenza"
          :icon-src="iconChat"
          :badge="assistenzaBadge"
          uppercase
          @click="onAssistenzaClick"
        />
      </div>

      <div class="avanti-header__mobile-actions">
        <AvantiNotificationBell
          :badge="notificationBadge"
          @click="onNotificationsClick"
        />
        <AvantiHeaderProfile
          v-if="avatarSrc"
          :avatar-src="avatarSrc"
          :initials="userInitials"
          :name="userName"
          @click="onProfileClick"
        />
      </div>
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

.avanti-header__logo-mobile {
  display: none;
}

.avanti-header__nav {
  display: flex;
  flex: 1 1 auto;
  gap: 12px;
  max-width: 660px;
  min-width: 0;
}

.avanti-header__mobile-actions {
  display: none;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
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

@media (max-width: 1024px) {
  .avanti-header__inner {
    padding: 12px var(--avanti-mobile-pad);
    gap: 12px;
  }

  .avanti-header__brand-nav {
    flex: 0 1 auto;
    gap: 0;
    padding: 0;
  }

  .avanti-header__logo-desktop,
  .avanti-header__nav,
  .avanti-header__assistenza {
    display: none;
  }

  .avanti-header__logo-mobile {
    display: block;
  }

  .avanti-header__mobile-actions {
    display: flex;
  }
}
</style>
