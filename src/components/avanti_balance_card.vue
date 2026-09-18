<script setup lang="ts">
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
  title: 'Il tuo saldo',
  badge: 'Completa i passaggi',
  subtitle: 'Importo approvato dai nostri partner',
  amount: '€ 12 000',
  meta: 'Prestito personale • TAN 3,8%',
  ctaLabel: 'Preleva i fondi',
  footnote: "Fondi disponibili dopo l'approvazione dei documenti",
  ctaDisabled: true,
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
      <span class="avanti-balance-card__badge">{{ badge }}</span>
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
        <img
          class="avanti-balance-card__cta-icon"
          :src="iconBank"
          alt=""
          width="28"
          height="28"
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
  gap: 16px;
  width: 100%;
  padding: 32px;
  border-radius: var(--avanti-radius-xl);
  background: var(--avanti-gradient-balance);
  box-shadow: var(--avanti-shadow-balance);
}

.avanti-balance-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
}

.avanti-balance-card__meta {
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 0;
  color: var(--avanti-teal-soft);
  text-transform: uppercase;
}

.avanti-balance-card__title {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.13px;
  line-height: normal;
}

.avanti-balance-card__subtitle {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.16px;
  line-height: normal;
}

.avanti-balance-card__badge {
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: var(--avanti-radius-pill);
  background: rgba(255, 255, 255, 0.2);
  color: var(--avanti-white);
  font-size: 11px;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
}

.avanti-balance-card__amount-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.avanti-balance-card__amount {
  margin: 0;
  color: var(--avanti-white);
  font-size: 52px;
  font-weight: 700;
  letter-spacing: -0.78px;
  line-height: normal;
}

.avanti-balance-card__loan {
  margin: 0;
  color: var(--avanti-teal-soft);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
}

.avanti-balance-card__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 18px 24px;
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
  gap: 10px;
}

.avanti-balance-card__cta-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.avanti-balance-card__cta-label,
.avanti-balance-card__cta-arrow {
  background: linear-gradient(180deg, #2491aa 0%, #1a7488 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  line-height: normal;
  white-space: nowrap;
}

.avanti-balance-card__cta-label {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.036px;
}

.avanti-balance-card__cta-arrow {
  font-size: 18px;
  font-weight: 500;
  opacity: 0.85;
}

.avanti-balance-card__footnote {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding-top: 8px;
}

.avanti-balance-card__footnote-line {
  flex-shrink: 0;
  width: 100px;
  height: 1px;
  background: rgba(255, 255, 255, 0.31);
}

.avanti-balance-card__footnote-text {
  margin: 0;
  color: var(--avanti-teal-soft);
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
}

@media (max-width: 1024px) {
  .avanti-balance-card {
    gap: 12px;
    padding: 20px;
  }

  .avanti-balance-card__meta {
    gap: 8px;
  }

  .avanti-balance-card__title {
    font-weight: 300;
  }

  .avanti-balance-card__subtitle {
    max-width: 150px;
    font-size: 10px;
    letter-spacing: 0.1px;
  }

  .avanti-balance-card__amount {
    font-size: 36px;
    letter-spacing: -0.54px;
  }

  .avanti-balance-card__loan {
    font-size: 12px;
  }

  .avanti-balance-card__cta {
    gap: 4px;
    padding: 12px 24px;
    border-radius: 9px;
  }

  .avanti-balance-card__cta-main {
    gap: 12px;
  }

  .avanti-balance-card__cta-icon {
    width: 20px;
    height: 20px;
  }

  .avanti-balance-card__cta-label {
    font-size: 16px;
    letter-spacing: 0.032px;
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
