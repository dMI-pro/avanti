<script setup lang="ts">
import { ref } from 'vue'
import iconLock from '@/assets/icons/icon-lock.svg'
import iconArrow from '@/assets/icons/icon-arrow-right.svg'
import AvantiCheckbox from '@/components/avanti_checkbox.vue'
import AvantiBadge from '@/components/avanti_badge.vue'
import AvantiIcon from '@/components/avanti_icon.vue'

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
  title: '',
  subtitle: '',
  badge: '',
  mobileBadge: '',
  checks: () => [],
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
          <AvantiIcon :src="iconLock" size="lg" />
        </div>

        <div class="avanti-progress-banner__text">
          <div class="avanti-progress-banner__heading">
            <p class="avanti-progress-banner__title">{{ title }}</p>
            <AvantiBadge
              class="avanti-progress-banner__badge-desktop"
              variant="pill"
              size="md"
              color="teal"
              :text="badge"
              uppercase
            />
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

        <AvantiBadge
          class="avanti-progress-banner__badge-mobile"
          variant="pill"
          size="md"
          color="teal"
          :text="mobileBadge"
          uppercase
        />
      </div>
    </div>

    <button
      class="avanti-progress-banner__action"
      type="button"
      aria-label="Continua"
      @click="onClick"
    >
      <AvantiIcon :src="iconArrow" size="md" />
    </button>
  </section>
</template>

<style scoped>
.avanti-progress-banner {
  display: flex;
  align-items: center;
  gap: calc(var(--avanti-modul) * 2);
  width: 100%;
  padding: calc(var(--avanti-modul) * 2) calc(var(--avanti-modul) * 2.5);
  border: 1px solid var(--avanti-teal-border);
  border-radius: var(--avanti-radius-lg);
  background: var(--avanti-teal-soft);
  font-family: var(--avanti-font-accent);
}

.avanti-progress-banner__main {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 0.75);
  min-width: 0;
}

.avanti-progress-banner__top {
  display: flex;
  gap: calc(var(--avanti-modul) * 2);
  align-items: flex-start;
  width: 100%;
}

.avanti-progress-banner__icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: calc(var(--avanti-modul) * 5.5);
  height: calc(var(--avanti-modul) * 5.5);
  border-radius: calc(var(--avanti-modul) * 2.75);
  background: var(--avanti-teal);
  box-shadow: var(--avanti-shadow-icon);
}



.avanti-progress-banner__text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 0.75);
  min-width: 0;
}

.avanti-progress-banner__heading {
  display: flex;
  align-items: center;
  gap: calc(var(--avanti-modul) * 1.25);
  width: 100%;
}

.avanti-progress-banner__title {
  flex: 1 1 auto;
  margin: 0;
  min-width: 0;
  color: var(--avanti-ink);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: normal;
}

.avanti-progress-banner__badge-mobile {
  display: none;
}

.avanti-progress-banner__subtitle {
  margin: 0;
  color: var(--avanti-muted);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: normal;
}

.avanti-progress-banner__bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: calc(var(--avanti-modul) * 1.5);
  width: 100%;
  padding-left: 60px;
}

.avanti-progress-banner__checks {
  display: flex;
  flex-direction: column;
  gap: var(--avanti-modul);
}

.avanti-progress-banner__action {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: calc(var(--avanti-modul) * 4.5);
  height: calc(var(--avanti-modul) * 4.5);
  border: none;
  border-radius: calc(var(--avanti-modul) * 2.25);
  background: var(--avanti-teal);
  box-shadow: var(--avanti-shadow-cta);
  cursor: pointer;
}

@media (max-width: 1024px) {
  .avanti-progress-banner {
    padding: calc(var(--avanti-modul) * 2);
    border-color: var(--avanti-teal);
  }

  .avanti-progress-banner__main {
    gap: calc(var(--avanti-modul) * 1.5);
  }

  .avanti-progress-banner__top {
    gap: calc(var(--avanti-modul) * 1.5);
  }

  .avanti-progress-banner__icon {
    width: calc(var(--avanti-modul) * 4);
    height: calc(var(--avanti-modul) * 4);
    border-radius: calc(var(--avanti-modul) * 2);
    box-shadow: none;
  }

  .avanti-progress-banner__icon :deep(.avanti-icon) {
    width: calc(var(--avanti-modul) * 1.75);
    height: calc(var(--avanti-modul) * 1.75);
  }

  .avanti-progress-banner__text {
    gap: calc(var(--avanti-modul) * 0.25);
  }

  .avanti-progress-banner__heading {
    display: block;
  }

  .avanti-progress-banner__badge-desktop {
    display: none;
  }

  .avanti-progress-banner__badge-mobile {
    display: inline-flex;
  }

  .avanti-progress-banner__subtitle {
    font-size: 0.6875rem;
  }

  .avanti-progress-banner__bottom {
    padding-left: 0;
  }

  .avanti-progress-banner__action {
    display: none;
  }
}
</style>
