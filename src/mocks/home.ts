import iconChart from '@/assets/icons/icon-chart.svg'
import iconShield from '@/assets/icons/icon-shield.svg'
import iconUser from '@/assets/icons/icon-user.svg'
import iconUpload from '@/assets/icons/icon-upload.svg'
import iconPen from '@/assets/icons/icon-pen.svg'
import iconStatusCheck from '@/assets/icons/icon-status-check.svg'
import iconArrowCircle from '@/assets/icons/icon-arrow-circle.svg'
import iconArrowMuted from '@/assets/icons/icon-arrow-muted.svg'
import iconCheck from '@/assets/icons/step-check.svg'
import iconUploadStep from '@/assets/icons/step-upload.svg'
import iconSign from '@/assets/icons/step-sign.svg'
import type { ProgressStatus } from '@/types'

export type BalanceCardMock = {
  title?: string
  badge?: string
  subtitle?: string
  amount?: string
  meta?: string
  ctaLabel?: string
  footnote?: string
  ctaDisabled?: boolean
}

export type StepsMock = {
  title?: string
  counter?: string
  steps: {
    label: string
    status: ProgressStatus
    iconSrc: string
  }[]
}

export type ChecklistItemMock = {
  id: string
  title: string
  statusText: string
  status: ProgressStatus
  iconSrc: string
  actionIconSrc: string
}

export type ChecklistMock = {
  eyebrow?: string
  title?: string
  progressSegments?: number
  completedSegments?: number
  defaultExpanded?: boolean
  items: ChecklistItemMock[]
}

export type ProgressBannerCheckItem = {
  id: string
  label: string
  checked?: boolean
}

export type ProgressBannerMock = {
  title?: string
  subtitle?: string
  badge?: string
  mobileBadge?: string
  checks?: ProgressBannerCheckItem[]
}

export type PersonalDataRow = {
  label: string
  value: string
  mono?: boolean
}

export type PersonalDataMock = {
  title?: string
  rows: PersonalDataRow[]
}

export const balanceCardMock: BalanceCardMock = {
  title: 'Il tuo saldo',
  badge: 'Completa i passaggi',
  subtitle: 'Importo approvato dai nostri partner',
  amount: '€ 12 000',
  meta: 'Prestito personale • TAN 3,8%',
  ctaLabel: 'Preleva i fondi',
  footnote: "Fondi disponibili dopo l'approvazione dei documenti",
  ctaDisabled: true,
}

export const stepsMock: StepsMock = {
  title: 'Passo 4 di 5',
  counter: '3 / 5 completati',
  steps: [
    { label: 'Simul.', status: 'done', iconSrc: iconCheck },
    { label: 'Approv.', status: 'done', iconSrc: iconCheck },
    { label: 'Account', status: 'done', iconSrc: iconCheck },
    { label: 'Docum.', status: 'current', iconSrc: iconUploadStep },
    { label: 'Firma', status: 'pending', iconSrc: iconSign },
  ],
}

export const checklistMock: ChecklistMock = {
  eyebrow: 'Completa tutti gli step',
  title: 'Per il prelievo dei fondi, completa tutti gli step',
  progressSegments: 5,
  completedSegments: 3,
  defaultExpanded: true,
  items: [
    {
      id: 'simulazione',
      title: 'Simulazione completata',
      statusText: 'Completato',
      status: 'done',
      iconSrc: iconChart,
      actionIconSrc: iconStatusCheck,
    },
    {
      id: 'credito',
      title: 'Credito approvato',
      statusText: 'Completato',
      status: 'done',
      iconSrc: iconShield,
      actionIconSrc: iconStatusCheck,
    },
    {
      id: 'account',
      title: 'Account creato',
      statusText: 'Completato',
      status: 'done',
      iconSrc: iconUser,
      actionIconSrc: iconStatusCheck,
    },
    {
      id: 'documenti',
      title: 'Documenti caricati',
      statusText: 'Step attuale • Azione richiesta',
      status: 'current',
      iconSrc: iconUpload,
      actionIconSrc: iconArrowCircle,
    },
    {
      id: 'contratto',
      title: 'Contratto firmato',
      statusText: 'In attesa',
      status: 'pending',
      iconSrc: iconPen,
      actionIconSrc: iconArrowMuted,
    },
  ],
}

export const progressBannerMock: ProgressBannerMock = {
  title: 'Per il prelievo dei fondi, completa tutti gli step',
  subtitle: 'Step ancora da completare',
  badge: '3 / 5 Completati',
  mobileBadge: '3 / 5',
  checks: [
    { id: 'documenti', label: 'Documenti', checked: false },
    { id: 'firma', label: 'Firma', checked: false },
  ],
}

export const personalDataMock: PersonalDataMock = {
  title: 'Dati personali',
  rows: [
    { label: 'Cognome', value: 'Intesa Sanpaolo S.p.A.' },
    { label: 'Nome', value: 'Marco Rossi' },
  ],
}
