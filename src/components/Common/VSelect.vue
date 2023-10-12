<script setup lang="ts">
import { ref, watch } from 'vue';

defineProps({
  options: { type: Object, default: () => {}}
})

const emits = defineEmits(['change'])

const selected = ref('')

watch(selected, (newValue) => {
  if (!newValue) return
  emits('change', newValue)
})
</script>

<template>
  <select 
    v-model="selected"
    v-bind="$attrs" 
    class="v-select" 
  >
    <option value>Не выбрано</option>
    <option v-for="(value, key) of options" :key="key" :value="key">{{ value }}</option>
  </select>
</template>

<style lang="scss" scoped>
.v-select {
  height: 40px;
  padding: 4px 8px;

  border: 2px solid rgb(0, 132, 255);
  border-radius: 12px;
}
</style>