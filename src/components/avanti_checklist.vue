<script setup lang="ts">
import { computed, ref } from 'vue'
import iconChevron from '@/assets/icons/icon-chevron.svg'
import AvantiChecklistItem from '@/components/avanti_checklist_item.vue'
import AvantiSectionHeader from '@/components/avanti_section_header.vue'
import AvantiIcon from '@/components/avanti_icon.vue'
import type { ProgressStatus } from '@/types'

type ChecklistItem = {
  id: string
  title: string
  statusText: string
  status: ProgressStatus
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
  eyebrow: '',
  title: '',
  progressSegments: 0,
  completedSegments: 0,
  defaultExpanded: true,
  items: () => [],
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
      <AvantiSectionHeader :eyebrow="eyebrow" :title="title" :title-tag="'p'">
        <template #right>
          <button
            class="avanti-checklist__toggle"
            type="button"
            :aria-expanded="isExpanded"
            aria-label="Toggle checklist"
            :class="{ 'avanti-checklist__toggle--collapsed': !isExpanded }"
            @click="onToggle"
          >
            <AvantiIcon :src="iconChevron" size="sm" />
          </button>
        </template>
      </AvantiSectionHeader>
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
  gap: calc(var(--avanti-modul) * 1.5);
  padding: calc(var(--avanti-modul) * 2);
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

.avanti-checklist__toggle :deep(.avanti-icon) {
  transition: transform 0.2s ease;
}

.avanti-checklist__toggle--collapsed :deep(.avanti-icon) {
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
  gap: calc(var(--avanti-modul) * 0.5);
  align-items: center;
  width: 100%;
  padding: calc(var(--avanti-modul) * 1.5) calc(var(--avanti-modul) * 2) calc(var(--avanti-modul) * 2);
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

  .avanti-checklist__toggle :deep(.avanti-icon),
  .avanti-checklist__toggle :deep(.avanti-icon img) {
    width: 9px;
    height: 9px;
  }
}
</style>
