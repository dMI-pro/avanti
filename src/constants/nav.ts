import iconHomeD from '@/assets/icons/nav-home.svg'
import iconHomeM from '@/assets/icons/nav-home-mobile.svg'
import iconDocsD from '@/assets/icons/nav-docs.svg'
import iconDocsM from '@/assets/icons/nav-docs-mobile.svg'
import iconProfileD from '@/assets/icons/nav-profile.svg'
import iconProfileM from '@/assets/icons/nav-profile-mobile.svg'
import iconChat from '@/assets/icons/nav-chat.svg'
import type { NavId } from '@/types'

export interface MainNavItem {
  id: NavId
  label: string
  icon: { desktop: string; mobile: string }
}

export const MAIN_NAV: MainNavItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: {
      desktop: iconHomeD,
      mobile: iconHomeM,
    },
  },
  {
    id: 'documenti',
    label: 'Documenti',
    icon: {
      desktop: iconDocsD,
      mobile: iconDocsM,
    },
  },
  {
    id: 'profilo',
    label: 'Profilo',
    icon: {
      desktop: iconProfileD,
      mobile: iconProfileM,
    },
  },
]

export const ASSISTENZA_ICON = iconChat
