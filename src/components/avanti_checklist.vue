<script setup lang="ts">
import { computed, ref } from 'vue'
import iconChevron from '@/assets/icons/icon-chevron.svg'
import iconChart from '@/assets/icons/icon-chart.svg'
import iconShield from '@/assets/icons/icon-shield.svg'
import iconUser from '@/assets/icons/icon-user.svg'
import iconUpload from '@/assets/icons/icon-upload.svg'
import iconPen from '@/assets/icons/icon-pen.svg'
import iconStatusCheck from '@/assets/icons/icon-status-check.svg'
import iconArrowCircle from '@/assets/icons/icon-arrow-circle.svg'
import iconArrowMuted from '@/assets/icons/icon-arrow-muted.svg'
import AvantiChecklistItem from '@/components/avanti_checklist_item.vue'

type ItemStatus = 'done' | 'current' | 'pending'

type ChecklistItem = {
  id: string
  title: string
  statusText: string
  status: ItemStatus
  iconSrc: string
  actionIconSrc: string
}

type Props = {
  eyebrow?: string
  title?: string
  items?: ChecklistItem[]
  progressSegments?: number
  completedSegments?: number
  defaultExpanded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Completa tutti gli step',
  title: 'Per il prelievo dei fondi, completa tutti gli step',
  progressSegments: 5,
  completedSegments: 3,
  defaultExpanded: true,
  items: () => [
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
})

const emit = defineEmits<{
  itemClick: [id: string]
}>()

const isExpanded = ref(props.defaultExpanded)

const segments = computed(() =>
  Array.from({ length: props.progressSegments }, (_, index) => {
    if (index < props.completedSegments) return 'done'
    if (index === props.completedSegments) return 'current'
    return 'pending'
  }),
)

function onToggle() {
  isExpanded.value = !isExpanded.value
}

function onItemClick(id: string) {
  emit('itemClick', id)
}
</script>

<template>
  <section class="avanti-checklist">
    <div class="avanti-checklist__header">
      <div class="avanti-checklist__heading">
        <p class="avanti-checklist__eyebrow">{{ eyebrow }}</p>
        <h2 class="avanti-checklist__title">{{ title }}</h2>
      </div>

      <button
        class="avanti-checklist__toggle"
        type="button"
        :aria-expanded="isExpanded"
        aria-label="Toggle checklist"
        @click="onToggle"
      >
        <img
          class="avanti-checklist__toggle-icon"
          :class="{ 'avanti-checklist__toggle-icon--collapsed': !isExpanded }"
          :src="iconChevron"
          alt=""
          width="14"
          height="14"
        />
      </button>
    </div>

    <template v-if="isExpanded">
      <div class="avanti-checklist__divider" />

      <div class="avanti-checklist__list">
        <template v-for="(item, index) in items" :key="item.id">
          <div v-if="index > 0" class="avanti-checklist__divider" />
          <AvantiChecklistItem
            :title="item.title"
            :status-text="item.statusText"
            :status="item.status"
            :icon-src="item.iconSrc"
            :action-icon-src="item.actionIconSrc"
            @click="onItemClick(item.id)"
          />
        </template>
      </div>

      <div class="avanti-checklist__divider" />

      <div class="avanti-checklist__progress" aria-hidden="true">
        <span
          v-for="(segment, index) in segments"
          :key="index"
          class="avanti-checklist__segment"
          :class="`avanti-checklist__segment--${segment}`"
        />
      </div>
    </template>
  </section>
</template>

<style scoped>
.avanti-checklist {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--avanti-border);
  border-radius: var(--avanti-radius-lg);
  background: var(--avanti-bg);
  box-shadow: var(--avanti-shadow-checklist);
}

.avanti-checklist__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
}

.avanti-checklist__heading {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.avanti-checklist__eyebrow {
  margin: 0;
  color: var(--avanti-teal);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.55px;
  line-height: normal;
  text-transform: uppercase;
}

.avanti-checklist__title {
  margin: 0;
  color: var(--avanti-ink);
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
}

.avanti-checklist__toggle {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--avanti-border);
  border-radius: var(--avanti-radius-sm);
  background: var(--avanti-bg-page);
  cursor: pointer;
}

.avanti-checklist__toggle-icon {
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease;
}

.avanti-checklist__toggle-icon--collapsed {
  transform: rotate(180deg);
}

.avanti-checklist__divider {
  width: 100%;
  height: 1px;
  background: var(--avanti-divider);
}

.avanti-checklist__list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.avanti-checklist__progress {
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100%;
  padding: 12px 16px 16px;
}

.avanti-checklist__segment {
  flex: 1 1 0;
  height: 4px;
  min-width: 0;
  border-radius: var(--avanti-radius-pill);
}

.avanti-checklist__segment--done {
  background: var(--avanti-teal);
}

.avanti-checklist__segment--current {
  background: var(--avanti-gradient-progress);
}

.avanti-checklist__segment--pending {
  background: var(--avanti-border);
}

@media (max-width: 1024px) {
  .avanti-checklist__toggle {
    width: 20px;
    height: 20px;
    border-width: 0.625px;
    border-radius: 5px;
  }

  .avanti-checklist__toggle-icon {
    width: 9px;
    height: 9px;
  }
}
</style>
