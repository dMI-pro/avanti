<script setup lang="ts">
import { computed } from 'vue'

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

type Props = {
  src: string
  alt?: string
  size?: AvatarSize
  width?: string | number
  height?: string | number
  withBorder?: boolean
  borderColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  size: 'md',
  withBorder: false,
})

const rootClass = computed(() => [
  'avanti-avatar',
  `avanti-avatar--size-${props.size}`,
  { 'avanti-avatar--bordered': props.withBorder },
])

const rootStyle = computed<Record<string, string>>(() => {
  const style: Record<string, string> = {}
  if (props.width !== undefined) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  if (props.height !== undefined) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  if (props.withBorder && props.borderColor) {
    style.borderColor = props.borderColor
  }
  return style
})
</script>

<template>
  <span
    :class="rootClass"
    :style="rootStyle"
  >
    <img
      class="avanti-avatar__img"
      :src="src"
      :alt="alt"
    />
  </span>
</template>

<style scoped>
.avanti-avatar {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: var(--avanti-radius-circle);
}

.avanti-avatar--bordered {
  border: 1px solid var(--avanti-teal);
}

.avanti-avatar__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.avanti-avatar--size-sm {
  width: 24px;
  height: 24px;
}

.avanti-avatar--size-md {
  width: 32px;
  height: 32px;
}

.avanti-avatar--size-lg {
  width: 40px;
  height: 40px;
}

.avanti-avatar--size-xl {
  width: 48px;
  height: 48px;
}
</style>
