<script setup lang="ts">
import { computed } from 'vue'

type IconSize = 'sm' | 'md' | 'lg' | 'xl'

type Props = {
  src: string
  size?: IconSize
  width?: string | number
  height?: string | number
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  alt: '',
})

const rootClass = computed(() => [
  'avanti-icon',
  `avanti-icon--size-${props.size}`,
])

const sizeInPx: Record<IconSize, string> = {
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '28px',
}

const rootStyle = computed<Record<string, string>>(() => {
  const style: Record<string, string> = {}
  if (props.width !== undefined) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  if (props.height !== undefined) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  return style
})

const fallbackSize = computed(() => {
  const w = props.width !== undefined
    ? typeof props.width === 'number' ? `${props.width}px` : props.width
    : sizeInPx[props.size]
  const h = props.height !== undefined
    ? typeof props.height === 'number' ? `${props.height}px` : props.height
    : sizeInPx[props.size]
  return { w, h }
})
</script>

<template>
  <span
    class="avanti-icon"
    :class="rootClass"
    :style="rootStyle"
    aria-hidden="true"
  >
    <img
      :src="src"
      :alt="alt"
      :width="fallbackSize.w"
      :height="fallbackSize.h"
    />
  </span>
</template>

<style scoped>
.avanti-icon {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.avanti-icon img {
  display: block;
  object-fit: contain;
}

.avanti-icon--size-sm {
  width: 14px;
  height: 14px;
}

.avanti-icon--size-sm img {
  width: 14px;
  height: 14px;
}

.avanti-icon--size-md {
  width: 16px;
  height: 16px;
}

.avanti-icon--size-md img {
  width: 16px;
  height: 16px;
}

.avanti-icon--size-lg {
  width: 20px;
  height: 20px;
}

.avanti-icon--size-lg img {
  width: 20px;
  height: 20px;
}

.avanti-icon--size-xl {
  width: 28px;
  height: 28px;
}

.avanti-icon--size-xl img {
  width: 28px;
  height: 28px;
}
</style>
