<script setup lang="ts">
import AvantiBadge from '@/components/avanti_badge.vue'
import AvantiIcon from '@/components/avanti_icon.vue'
import iconBank from '@/assets/icons/icon-bank.svg'

type Props = {
  title?: string
  badge?: string
  subtitle?: string
  amount?: string
  meta?: string
  ctaLabel?: string
  footnote?: string
  ctaDisabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  badge: '',
  subtitle: '',
  amount: '',
  meta: '',
  ctaLabel: '',
  footnote: '',
  ctaDisabled: false,
})

const emit = defineEmits<{
  ctaClick: []
}>()

function onCtaClick() {
  if (props.ctaDisabled) return
  emit('ctaClick')
}
</script>

<template>
  <section class="avanti-balance-card">
    <div class="avanti-balance-card__top">
      <div class="avanti-balance-card__meta">
        <p class="avanti-balance-card__title">{{ title }}</p>
        <p class="avanti-balance-card__subtitle">{{ subtitle }}</p>
      </div>
      <AvantiBadge
        variant="pill"
        size="md"
        color="white-alpha"
        :text="badge"
      />
    </div>

    <div class="avanti-balance-card__amount-block">
      <p class="avanti-balance-card__amount">{{ amount }}</p>
      <p class="avanti-balance-card__loan">{{ meta }}</p>
    </div>

    <button
      class="avanti-balance-card__cta"
      type="button"
      :disabled="ctaDisabled"
      @click="onCtaClick"
    >
      <span class="avanti-balance-card__cta-main">
        <AvantiIcon
          class="avanti-balance-card__cta-icon"
          :src="iconBank"
          size="xl"
        />
        <span class="avanti-balance-card__cta-label">{{ ctaLabel }}</span>
      </span>
      <span class="avanti-balance-card__cta-arrow" aria-hidden="true">→</span>
    </button>

    <div class="avanti-balance-card__footnote">
      <span class="avanti-balance-card__footnote-line" aria-hidden="true" />
      <p class="avanti-balance-card__footnote-text">{{ footnote }}</p>
    </div>
  </section>
</template>

<style scoped>
.avanti-balance-card {
  display: flex;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 2);
  width: 100%;
  padding: calc(var(--avanti-modul) * 4);
  border-radius: var(--avanti-radius-xl);
  background: var(--avanti-gradient-balance);
  box-shadow: var(--avanti-shadow-balance);
}

.avanti-balance-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: calc(var(--avanti-modul) * 2);
  width: 100%;
}

.avanti-balance-card__meta {
  display: flex;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 2.75);
  min-width: 0;
  color: var(--avanti-teal-soft);
  text-transform: uppercase;
}

.avanti-balance-card__title {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.008125rem;
  line-height: normal;
}

.avanti-balance-card__subtitle {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01rem;
  line-height: normal;
}

.avanti-balance-card__amount-block {
  display: flex;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 0.5);
  width: 100%;
}

.avanti-balance-card__amount {
  margin: 0;
  color: var(--avanti-white);
  font-size: 3.25rem;
  font-weight: 700;
  letter-spacing: -0.04875rem;
  line-height: normal;
}

.avanti-balance-card__loan {
  margin: 0;
  color: var(--avanti-teal-soft);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: normal;
}

.avanti-balance-card__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--avanti-modul) * 1.5);
  width: 100%;
  padding: calc(var(--avanti-modul) * 2.25) calc(var(--avanti-modul) * 3);
  border: none;
  border-radius: var(--avanti-radius-md);
  background: var(--avanti-bg-page);
  cursor: pointer;
}

.avanti-balance-card__cta:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.avanti-balance-card__cta-main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--avanti-modul) * 1.25);
}

.avanti-balance-card__cta-icon {
  flex-shrink: 0;
}

.avanti-balance-card__cta-label,
.avanti-balance-card__cta-arrow {
  background: var(--avanti-gradient-balance);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  line-height: normal;
  white-space: nowrap;
}

.avanti-balance-card__cta-label {
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.00225rem;
}

.avanti-balance-card__cta-arrow {
  font-size: 1.125rem;
  font-weight: 500;
  opacity: 0.85;
}

.avanti-balance-card__footnote {
  display: flex;
  align-items: center;
  gap: calc(var(--avanti-modul) * 2);
  width: 100%;
  padding-top: var(--avanti-modul);
}

.avanti-balance-card__footnote-line {
  flex-shrink: 0;
  width: 100px;
  height: 1px;
  background: var(--avanti-white-alpha-31);
}

.avanti-balance-card__footnote-text {
  margin: 0;
  color: var(--avanti-teal-soft);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: normal;
}

@media (max-width: 1024px) {
  .avanti-balance-card {
    gap: calc(var(--avanti-modul) * 1.5);
    padding: calc(var(--avanti-modul) * 2.5);
  }

  .avanti-balance-card__meta {
    gap: var(--avanti-modul);
  }

  .avanti-balance-card__title {
    font-weight: 300;
  }

  .avanti-balance-card__subtitle {
    max-width: 150px;
    font-size: 0.625rem;
    letter-spacing: 0.00625rem;
  }

  .avanti-balance-card__amount {
    font-size: 2.25rem;
    letter-spacing: -0.03375rem;
  }

  .avanti-balance-card__loan {
    font-size: 0.75rem;
  }

  .avanti-balance-card__cta {
    gap: calc(var(--avanti-modul) * 0.5);
    padding: calc(var(--avanti-modul) * 1.5) calc(var(--avanti-modul) * 3);
    border-radius: 9px;
  }

  .avanti-balance-card__cta-main {
    gap: calc(var(--avanti-modul) * 1.5);
  }

  .avanti-balance-card__cta-icon,
  :deep(.avanti-balance-card__cta-icon img) {
    width: 20px;
    height: 20px;
  }

  .avanti-balance-card__cta-label {
    font-size: 1rem;
    letter-spacing: 0.002rem;
  }

  .avanti-balance-card__footnote {
    justify-content: center;
    gap: 0;
    padding-top: 0;
  }

  .avanti-balance-card__footnote-line {
    display: none;
  }

  .avanti-balance-card__footnote-text {
    flex: 1 1 auto;
    font-weight: 500;
  }
}
</style>
