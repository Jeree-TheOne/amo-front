<script setup lang="ts">
import VButton from './VButton.vue'

import { computed } from 'vue';
const props = defineProps({
  modelValue: { type: String, default: '' },
  clearable: { type: Boolean, default: true },
  placeholder: { type: String, default: 'Placeholder' },
  disabled: { type: Boolean, default: false },
})

const emits = defineEmits([ 'update:modelValue' ])

const isClearable = computed(() => {
  return props.clearable && props.modelValue
})

const input = (e: Event) => {
  const target = (e.target as HTMLInputElement)
  const value = target.value
  emits('update:modelValue', value)
}

const clear = () => {
  if (!isClearable) return

  emits('update:modelValue', '')
}

const classes = computed(() => {
  const baseClass = 'v-input'

  return {
    [`${baseClass}--disabled`]: props.disabled,
  }
})
</script>

<template>
  <label
    class="v-input"
    :class="classes"
  >
    <slot name="prepend-data" />
    <input
      :value="modelValue"
      class="v-input__input"
      :placeholder="placeholder"
      :disabled="disabled"
      v-bind="$attrs"
      @input="input"
    >
    <slot name="append-data" />
    <VButton
      v-if="isClearable"
      text
      class="v-input__clear-button"
      @click="clear"
    >
      <slot name="clear">
        x
      </slot>
    </VButton>

  </label>
</template>

<style scoped lang="scss">
$base-class: "v-input";

.#{$base-class} {
  display: flex;
  gap: 8px;
  height: 40px;
  width: max(120px, 100%);

  align-items: center;
  justify-content: center;

  outline: none;
  border: 2px solid rgb(0, 132, 255);
  border-radius: 12px;

  padding: 8px 18px 8px 10px;

  color: black;

  &:hover {
    border-color: lighten(rgb(0, 132, 255), 10%);
  }

  &__input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    color: inherit;

    caret-color: black;

    &::placeholder {
      color: rgb(131, 131, 131);
    }
  }

  &__clear-button {
    color: rgb(0, 132, 255);

    &:hover {
      color: lighten(rgb(0, 132, 255), 10%);
    }
  }

  &--disabled {
    border-color: rgb(131, 131, 131) !important;
    color: rgb(131, 131, 131);

    & .#{$base-class}__clear-button {
      display: none;
    }
  }
}
</style>
