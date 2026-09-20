<script setup lang="ts">
import { computed } from 'vue'

type TitleTag = 'h1' | 'h2' | 'h3' | 'p'

type Props = {
  eyebrow?: string
  title: string
  titleTag?: TitleTag
}

const props = withDefaults(defineProps<Props>(), {
  titleTag: 'h2',
})

const titleIsHeading = computed(
  () => props.titleTag === 'h1' || props.titleTag === 'h2' || props.titleTag === 'h3',
)
</script>

<template>
  <div class="avanti-section-header">
    <div class="avanti-section-header__heading">
      <p v-if="eyebrow" class="avanti-section-header__eyebrow">
        {{ eyebrow }}
      </p>
      <component
        :is="titleTag"
        :class="titleIsHeading ? 'avanti-section-header__title' : 'avanti-section-header__title avanti-section-header__title--text'"
      >
        {{ title }}
      </component>
    </div>
    <slot name="right" />
  </div>
</template>

<style scoped>
.avanti-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(var(--avanti-modul) * 1.5);
  width: 100%;
}

.avanti-section-header__heading {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: calc(var(--avanti-modul) * 0.5);
  min-width: 0;
}

.avanti-section-header__eyebrow {
  margin: 0;
  color: var(--avanti-teal);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.034375rem;
  line-height: normal;
  text-transform: uppercase;
}

.avanti-section-header__title {
  margin: 0;
  color: var(--avanti-ink);
  font-size: 0.8125rem;
  line-height: normal;
}

.avanti-section-header__title {
  font-weight: 700;
}

.avanti-section-header__title--text {
  font-weight: 600;
}
</style>
