<script setup lang="ts">
import { ref } from 'vue'
import iconLock from '@/assets/icons/icon-lock.svg'
import iconArrow from '@/assets/icons/icon-arrow-right.svg'
import AvantiCheckbox from '@/components/avanti_checkbox.vue'

type CheckItem = {
  id: string
  label: string
  checked?: boolean
}

type Props = {
  title?: string
  subtitle?: string
  badge?: string
  mobileBadge?: string
  checks?: CheckItem[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Per il prelievo dei fondi, completa tutti gli step',
  subtitle: 'Step ancora da completare',
  badge: '3 / 5 Completati',
  mobileBadge: '3 / 5',
  checks: () => [
    { id: 'documenti', label: 'Documenti', checked: false },
    { id: 'firma', label: 'Firma', checked: false },
  ],
})

const emit = defineEmits<{
  click: []
  checkChange: [id: string, checked: boolean]
}>()

const localChecks = ref(
  props.checks.map((item) => ({ ...item, checked: item.checked ?? false })),
)

function onClick() {
  emit('click')
}

function onCheckChange(id: string, checked: boolean) {
  const item = localChecks.value.find((check) => check.id === id)
  if (!item) return
  item.checked = checked
  emit('checkChange', id, checked)
}
</script>

<template>
  <section class="avanti-progress-banner">
    <div class="avanti-progress-banner__main">
      <div class="avanti-progress-banner__top">
        <div class="avanti-progress-banner__icon" aria-hidden="true">
          <img :src="iconLock" alt="" width="20" height="20" />
        </div>

        <div class="avanti-progress-banner__text">
          <div class="avanti-progress-banner__heading">
            <p class="avanti-progress-banner__title">{{ title }}</p>
            <span class="avanti-progress-banner__badge avanti-progress-banner__badge--desktop">
              {{ badge }}
            </span>
          </div>
          <p class="avanti-progress-banner__subtitle">{{ subtitle }}</p>
        </div>
      </div>

      <div class="avanti-progress-banner__bottom">
        <div class="avanti-progress-banner__checks">
          <AvantiCheckbox
            v-for="item in localChecks"
            :key="item.id"
            :label="item.label"
            :checked="item.checked"
            @update:checked="onCheckChange(item.id, $event)"
          />
        </div>

        <span class="avanti-progress-banner__badge avanti-progress-banner__badge--mobile">
          {{ mobileBadge }}
        </span>
      </div>
    </div>

    <button
      class="avanti-progress-banner__action"
      type="button"
      aria-label="Continua"
      @click="onClick"
    >
      <img :src="iconArrow" alt="" width="16" height="16" />
    </button>
  </section>
</template>

<style scoped>
.avanti-progress-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 16px 20px;
  border: 1px solid var(--avanti-teal-border);
  border-radius: var(--avanti-radius-lg);
  background: var(--avanti-teal-soft);
  font-family: var(--avanti-font-accent);
}

.avanti-progress-banner__main {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.avanti-progress-banner__top {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
}

.avanti-progress-banner__icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: var(--avanti-teal);
  box-shadow: var(--avanti-shadow-icon);
}

.avanti-progress-banner__icon img {
  width: 20px;
  height: 20px;
}

.avanti-progress-banner__text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.avanti-progress-banner__heading {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.avanti-progress-banner__title {
  flex: 1 1 auto;
  margin: 0;
  min-width: 0;
  color: var(--avanti-ink);
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
}

.avanti-progress-banner__badge {
  flex-shrink: 0;
  padding: 4px 12px;
  border-radius: var(--avanti-radius-pill);
  background: var(--avanti-teal);
  color: var(--avanti-white);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.33px;
  line-height: normal;
  text-transform: uppercase;
  white-space: nowrap;
}

.avanti-progress-banner__badge--mobile {
  display: none;
}

.avanti-progress-banner__subtitle {
  margin: 0;
  color: var(--avanti-muted);
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
}

.avanti-progress-banner__bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding-left: 60px;
}

.avanti-progress-banner__checks {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.avanti-progress-banner__action {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 18px;
  background: var(--avanti-teal);
  box-shadow: var(--avanti-shadow-cta);
  cursor: pointer;
}

.avanti-progress-banner__action img {
  width: 16px;
  height: 16px;
}

@media (max-width: 1024px) {
  .avanti-progress-banner {
    padding: 16px;
    border-color: var(--avanti-teal);
  }

  .avanti-progress-banner__main {
    gap: 12px;
  }

  .avanti-progress-banner__top {
    gap: 12px;
  }

  .avanti-progress-banner__icon {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    box-shadow: none;
  }

  .avanti-progress-banner__icon img {
    width: 14px;
    height: 14px;
  }

  .avanti-progress-banner__text {
    gap: 2px;
  }

  .avanti-progress-banner__heading {
    display: block;
  }

  .avanti-progress-banner__badge--desktop {
    display: none;
  }

  .avanti-progress-banner__badge--mobile {
    display: inline-flex;
  }

  .avanti-progress-banner__subtitle {
    font-size: 11px;
  }

  .avanti-progress-banner__bottom {
    padding-left: 0;
  }

  .avanti-progress-banner__action {
    display: none;
  }
}
</style>
