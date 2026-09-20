<script setup lang="ts">
import { computed } from 'vue'

type IconSize = 'sm' | 'md' | 'lg' | 'xl'

type Props = {
  src: string
  size?: IconSize
  width?: string | number
  height?: string | number
  offsetX?: string | number
  offsetY?: string | number
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

function toLength(v: string | number | undefined): string | null {
  if (v === undefined) return null
  return typeof v === 'number' ? `${v}px` : v
}

const imgStyle = computed<Record<string, string>>(() => {
  const style: Record<string, string> = {}
  const x = toLength(props.offsetX) ?? '0'
  const y = toLength(props.offsetY) ?? '0'
  if (x !== '0' || y !== '0') {
    style.transform = `translate(${x}, ${y})`
  }
  return style
})
</script>

<template>
  <span
    :class="rootClass"
    :style="rootStyle"
    aria-hidden="true"
  >
    <img
      :src="src"
      :alt="alt"
      :style="imgStyle"
    />
  </span>
</template>

<style scoped>
.avanti-icon {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.avanti-icon img {
  display: block;
  width: 100%;
  height: 100%;
}

.avanti-icon--size-sm {
  width: 14px;
  height: 14px;
}

.avanti-icon--size-md {
  width: 16px;
  height: 16px;
}

.avanti-icon--size-lg {
  width: 20px;
  height: 20px;
}

.avanti-icon--size-xl {
  width: 28px;
  height: 28px;
}
</style>
