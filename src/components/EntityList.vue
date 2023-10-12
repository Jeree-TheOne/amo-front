<script setup lang="ts">
defineProps({
  items: { type: Object, default: () => {} },
  title: {type: String, default: 'Заголовок'}
})
</script>

<template>
  <div class="entity-list">
    {{ title }}
    <div class="entity-list__item" v-for="item of items">{{ item }}</div>
  </div>
</template>



<style lang="scss" scoped>
.entity-list {
  width: 33%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px

  &__item {
    padding: 2px;
  }
}
</style>