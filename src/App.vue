<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import VButton from './components/Common/VButton.vue'
import VInput from './components/Common/VInput.vue'
import VSelect from './components/Common/VSelect.vue';

import { LEAD, CONTACT, COMPANY, Entities } from './constants/entities'
import { useStore } from "./composables/useStore";
import EntityList from './components/EntityList.vue';

const { isLoading, entities } = storeToRefs(useStore())
const { add } = useStore()
const name = ref('')
const option = ref<Entities>()

const OPTIONS = {
  [LEAD]: 'Сделка',
  [CONTACT]: 'Контакт', 
  [COMPANY]: 'Компания'
}

const changeOption = (value: Entities) => {
  option.value = value
}

const addItem = () => {
  if (!option.value || !name.value) return
  add(option.value, name.value)
}
</script>

<template>
  <div class="main">
    <div class="actions-panel">
      <VSelect :disabled="isLoading" :options="OPTIONS" @change="changeOption"/>
      <VInput :disabled="isLoading" v-model="name"/>
      <VButton :disabled="isLoading || !option" :loading="isLoading" @click="addItem">Создать</VButton>
    </div>
    <div class="entities">
      <EntityList v-for="(entity, type) of entities" :title="OPTIONS[type]" :items="entity" :type="type"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
}
.actions-panel {
  display: flex;
  gap: 8px;
}

.entities {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 4px;
}
</style>
