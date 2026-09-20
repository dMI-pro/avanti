<script setup lang="ts">
import { computed } from 'vue'
import AvantiStep from '@/components/avanti_step.vue'
import AvantiSectionHeader from '@/components/avanti_section_header.vue'
import type { ProgressStatus } from '@/types'

type StepItem = {
  label: string
  status: ProgressStatus
  iconSrc: string
}

type Props = {
  title?: string
  counter?: string
  steps?: StepItem[]
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  counter: '',
  steps: () => [],
})

const trackSteps = computed(() =>
  props.steps.map((step, index) => ({
    ...step,
    showLineAfter: index < props.steps.length - 1,
    lineAfterActive: step.status === 'done',
  })),
)
</script>

<template>
  <section class="avanti-steps">
    <AvantiSectionHeader :title="title" :title-tag="'h2'">
      <template #right>
        <p class="avanti-steps__counter">{{ counter }}</p>
      </template>
    </AvantiSectionHeader>

    <ol class="avanti-steps__track">
      <AvantiStep
        v-for="(step, index) in trackSteps"
        :key="`${step.label}-${index}`"
        :label="step.label"
        :status="step.status"
        :icon-src="step.iconSrc"
        :show-line-after="step.showLineAfter"
        :line-after-active="step.lineAfterActive"
      />
    </ol>
  </section>
</template>

<style scoped>
.avanti-steps {
  display: flex;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 2);
  width: 100%;
  padding: calc(var(--avanti-modul) * 2.5) calc(var(--avanti-modul) * 3);
  border: 1px solid var(--avanti-teal-muted-border);
  border-radius: var(--avanti-radius-lg);
  background: var(--avanti-bg);
  box-shadow: var(--avanti-shadow-card);
}

.avanti-steps__counter {
  margin: 0;
  color: var(--avanti-muted);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
}

.avanti-steps__track {
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

  @media (max-width: 1024px) {
  .avanti-steps {
    gap: calc(var(--avanti-modul) * 1.5);
    padding: calc(var(--avanti-modul) * 2);
  }

  .avanti-steps__counter {
    font-size: 0.625rem;
  }
}
</style>
