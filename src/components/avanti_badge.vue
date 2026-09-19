<script setup lang="ts">
import { computed } from 'vue'

type BadgeVariant = 'count' | 'pill' | 'label'
type BadgeSize = 'sm' | 'md' | 'lg'
type BadgeColor = 'danger' | 'dark-red' | 'teal' | 'white' | 'white-alpha'
type BadgePosition = 'none' | 'top-right' | 'top-left'

type Props = {
  variant: BadgeVariant
  size?: BadgeSize
  color?: BadgeColor
  position?: BadgePosition
  text?: string | number
  offsetTop?: string
  offsetRight?: string
  offsetLeft?: string
  withBorder?: boolean
  uppercase?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'danger',
  position: 'none',
  withBorder: false,
  uppercase: false,
})

const visible = computed(() => {
  if (props.text === undefined || props.text === null || props.text === '') {
    return false
  }
  if (typeof props.text === 'number') {
    return props.text > 0
  }
  return true
})

const rootClass = computed(() => [
  'avanti-badge',
  `avanti-badge--variant-${props.variant}`,
  `avanti-badge--size-${props.size}`,
  `avanti-badge--color-${props.color}`,
  `avanti-badge--position-${props.position}`,
  {
    'avanti-badge--border': props.withBorder,
    'avanti-badge--uppercase': props.uppercase,
  },
])

const rootStyle = computed<Record<string, string>>(() => {
  const style: Record<string, string> = {}
  if (props.offsetTop) style['--avanti-badge-offset-top'] = props.offsetTop
  if (props.offsetRight) style['--avanti-badge-offset-right'] = props.offsetRight
  if (props.offsetLeft) style['--avanti-badge-offset-left'] = props.offsetLeft
  return style
})
</script>

<template>
  <span
    v-if="visible"
    class="avanti-badge"
    :class="rootClass"
    :style="rootStyle"
    aria-hidden="true"
  >
    {{ text }}
  </span>
</template>

<style scoped>
.avanti-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  line-height: normal;
  user-select: none;
}

/* =============== variant = count =============== */
.avanti-badge--variant-count {
  color: var(--avanti-white);
}

.avanti-badge--variant-count.avanti-badge--size-sm {
  min-width: 12px;
  height: 12px;
  padding: 0 3px;
  font-size: 0.375rem;
  line-height: 1;
  border-radius: 6px;
}

.avanti-badge--variant-count.avanti-badge--size-md {
  width: 22px;
  height: 22px;
  font-size: 0.6875rem;
  border-radius: 11px;
}

.avanti-badge--variant-count.avanti-badge--size-lg {
  width: 28px;
  height: 28px;
  font-size: 1.125rem;
  line-height: 1;
  border-radius: 18px;
}

/* =============== variant = pill =============== */
.avanti-badge--variant-pill {
  flex-shrink: 0;
  white-space: nowrap;
  border-radius: var(--avanti-radius-pill);
}

.avanti-badge--variant-pill.avanti-badge--size-sm {
  padding: calc(var(--avanti-modul) * 0.5) calc(var(--avanti-modul) * 1.25);
  font-size: 0.6875rem;
}

.avanti-badge--variant-pill.avanti-badge--size-md {
  padding: calc(var(--avanti-modul) * 0.5) calc(var(--avanti-modul) * 1.5);
  font-size: 0.6875rem;
}

.avanti-badge--variant-pill.avanti-badge--size-lg {
  padding: calc(var(--avanti-modul) * 0.75) calc(var(--avanti-modul) * 2);
  font-size: 0.875rem;
}

/* =============== variant = label =============== */
.avanti-badge--variant-label {
  flex-shrink: 0;
  white-space: nowrap;
  border-radius: var(--avanti-radius-sm);
}

.avanti-badge--variant-label.avanti-badge--size-sm {
  padding: calc(var(--avanti-modul) * 0.25) calc(var(--avanti-modul));
  font-size: 0.625rem;
}

.avanti-badge--variant-label.avanti-badge--size-md {
  padding: calc(var(--avanti-modul) * 0.375) calc(var(--avanti-modul) * 1.25);
  font-size: 0.6875rem;
}

.avanti-badge--variant-label.avanti-badge--size-lg {
  padding: calc(var(--avanti-modul) * 0.5) calc(var(--avanti-modul) * 1.5);
  font-size: 0.75rem;
}

/* =============== colors =============== */
.avanti-badge--color-danger {
  background: var(--avanti-danger);
  color: var(--avanti-white);
}

.avanti-badge--color-dark-red {
  background: var(--avanti-badge-dark-red);
  color: var(--avanti-white);
}

.avanti-badge--color-teal {
  background: var(--avanti-teal);
  color: var(--avanti-white);
  letter-spacing: 0.020625rem;
}

.avanti-badge--color-white {
  background: var(--avanti-white);
  color: var(--avanti-ink);
}

.avanti-badge--color-white-alpha {
  background: var(--avanti-white-alpha-20);
  color: var(--avanti-white);
}

/* =============== positions =============== */
.avanti-badge--position-none {
  position: static;
}

.avanti-badge--position-top-right,
.avanti-badge--position-top-left {
  position: absolute;
  top: var(--avanti-badge-offset-top, 0);
}

.avanti-badge--position-top-right {
  right: var(--avanti-badge-offset-right, 0);
}

.avanti-badge--position-top-left {
  left: var(--avanti-badge-offset-left, 0);
}

/* =============== state modifiers =============== */
.avanti-badge--border.avanti-badge--size-sm {
  border: 1px solid var(--avanti-white);
}

.avanti-badge--border.avanti-badge--size-md,
.avanti-badge--border.avanti-badge--size-lg {
  border: calc(var(--avanti-modul) * 0.25) solid var(--avanti-white);
}

.avanti-badge--uppercase {
  text-transform: uppercase;
}
</style>
