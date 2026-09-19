<script setup lang="ts">
import logoMark from '@/assets/icons/logo-mark.svg'

type Props = {
  brand?: string
  compact?: boolean
}

withDefaults(defineProps<Props>(), {
  brand: 'Avanti',
  compact: false,
})
</script>

<template>
  <div
    class="avanti-logo"
    :class="{ 'avanti-logo--compact': compact }"
    aria-label="Avanti"
  >
    <img class="avanti-logo__mark" :src="logoMark" alt="" width="48" height="38" />
    <span class="avanti-logo__text">{{ brand }}</span>
  </div>
</template>

<style scoped>
.avanti-logo {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: calc(var(--avanti-modul) * 1.5);
}

.avanti-logo__mark {
  width: 48px;
  height: 38px;
  flex-shrink: 0;
  object-fit: contain;
}

.avanti-logo__text {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.1rem;
  color: var(--avanti-logo-black);
  white-space: nowrap;
}

.avanti-logo--compact {
  gap: calc(var(--avanti-modul) * 0.75);
}

.avanti-logo--compact .avanti-logo__mark {
  width: 34px;
  height: 26px;
}

.avanti-logo--compact .avanti-logo__text {
  font-size: 1.375rem;
  letter-spacing: -0.06875rem;
  color: var(--avanti-ink);
}
</style>
