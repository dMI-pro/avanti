<script setup lang="ts">
import { computed } from 'vue'
import iconCheck from '@/assets/icons/step-check.svg'
import iconUpload from '@/assets/icons/step-upload.svg'
import iconSign from '@/assets/icons/step-sign.svg'
import AvantiStep from '@/components/avanti_step.vue'

type StepStatus = 'done' | 'current' | 'pending'

type StepItem = {
  label: string
  status: StepStatus
}

type Props = {
  title?: string
  counter?: string
  steps?: StepItem[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Passo 4 di 5',
  counter: '3 / 5 completati',
  steps: () => [
    { label: 'Simul.', status: 'done' },
    { label: 'Approv.', status: 'done' },
    { label: 'Account', status: 'done' },
    { label: 'Docum.', status: 'current' },
    { label: 'Firma', status: 'pending' },
  ],
})

function iconForStatus(status: StepStatus) {
  if (status === 'done') return iconCheck
  if (status === 'current') return iconUpload
  return iconSign
}

const trackSteps = computed(() =>
  props.steps.map((step, index) => ({
    ...step,
    iconSrc: iconForStatus(step.status),
    showLineAfter: index < props.steps.length - 1,
    lineAfterActive: step.status === 'done',
  })),
)
</script>

<template>
  <section class="avanti-steps">
    <div class="avanti-steps__header">
      <h2 class="avanti-steps__title">{{ title }}</h2>
      <p class="avanti-steps__counter">{{ counter }}</p>
    </div>

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
  gap: 16px;
  width: 100%;
  padding: 20px 24px;
  border: 1px solid var(--avanti-teal-muted-border);
  border-radius: var(--avanti-radius-lg);
  background: var(--avanti-bg);
  box-shadow: var(--avanti-shadow-card);
}

.avanti-steps__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
}

.avanti-steps__title {
  margin: 0;
  color: var(--avanti-ink);
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
}

.avanti-steps__counter {
  margin: 0;
  color: var(--avanti-muted);
  font-size: 13px;
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
    gap: 12px;
    padding: 16px;
  }

  .avanti-steps__title,
  .avanti-steps__counter {
    font-size: 10px;
  }
}
</style>
