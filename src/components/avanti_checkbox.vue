<script setup lang="ts">
type Props = {
  label: string
  checked?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
  disabled: false,
})

const emit = defineEmits<{
  'update:checked': [value: boolean]
  change: [value: boolean]
}>()

function onClick() {
  if (props.disabled) return

  const next = !props.checked
  emit('update:checked', next)
  emit('change', next)
}
</script>

<template>
  <button
    class="avanti-checkbox"
    type="button"
    role="checkbox"
    :aria-checked="checked"
    :disabled="disabled"
    :class="{
      'avanti-checkbox--checked': checked,
      'avanti-checkbox--disabled': disabled,
    }"
    @click="onClick"
  >
    <span class="avanti-checkbox__box" aria-hidden="true">
      <span class="avanti-checkbox__mark" />
    </span>
    <span class="avanti-checkbox__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.avanti-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.avanti-checkbox__box {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid var(--avanti-teal);
  border-radius: 4px;
  background: var(--avanti-white);
}

.avanti-checkbox__mark {
  display: none;
  width: 10px;
  height: 6px;
  border-left: 2px solid var(--avanti-white);
  border-bottom: 2px solid var(--avanti-white);
  transform: rotate(-45deg) translateY(-1px);
}

.avanti-checkbox__label {
  color: var(--avanti-ink);
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
}

.avanti-checkbox--checked .avanti-checkbox__box {
  background: var(--avanti-teal);
}

.avanti-checkbox--checked .avanti-checkbox__mark {
  display: block;
}

.avanti-checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

@media (max-width: 1024px) {
  .avanti-checkbox__box {
    width: 16px;
    height: 16px;
  }

  .avanti-checkbox__mark {
    width: 8px;
    height: 5px;
  }
}
</style>
