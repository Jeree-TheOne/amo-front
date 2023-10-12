<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  text: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false }
})


const classes = computed(() => {
  const baseClass = 'v-button'

  return {
    [`${baseClass}--text`]: props.text,
    [`${baseClass}--disabled`]: props.disabled,
    [`${baseClass}--loading`]: props.loading,
  }
})
</script>

<template>
  <button
    class="v-button"
    v-bind="$attrs"
    :class="classes"
    :disabled="disabled && loading"
  >
    <slot v-if="!loading"/>
    <span v-else class="v-button__loader"/>

  </button>
</template>

<style lang="scss" scoped>
$base-class: "v-button";

.#{$base-class} {
  height:40px;
  width: fit-content;
  padding: 8px 14px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;
  white-space: nowrap;

  border-radius: 8px;

  background-color: rgb(0, 132, 255);
  color: white;

  cursor: pointer;

  &:hover {
    background-color: lighten(rgb(0, 132, 255), 10%);
  }

  &.#{$base-class}--loading {
    background-color: lighten(rgb(0, 132, 255), 10%) !important;

    padding: 8px;

    cursor: not-allowed;
  }

  // Disabled state
  .#{$base-class}--disabled {
    cursor: not-allowed;
    background: rgb(163, 163, 163) !important;
    color: black
  }

  &--text {
    background: transparent !important;

    color: rgb(0, 132, 255);

    &:hover {
      color: lighten(rgb(0, 132, 255), 10%)
    }

    // Disabled state
    &.#{$base-class}--disabled {
      color: rgb(163, 163, 163) !important;
    }
  }

  &__loader {
    width: 24px;
    height: 24px;
    border: 2px solid white;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
    }
  }
}
</style>
