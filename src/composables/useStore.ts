import { defineStore } from 'pinia'
import { COMPANY, CONTACT, Entities, LEAD } from '../constants/entities'
import EntitiesService from "../services/entitiesService";

import { ref } from 'vue'

export const useStore = defineStore('main', () => {
  const entities = ref({
    [LEAD]: [] as any[],
    [CONTACT]: [] as any[],
    [COMPANY]: [] as any[]
  })
  const isLoading = ref(false)

  function addToStore(type: Entities, entity: any) {
    entities.value[type].push(entity)
  }

  async function add(type: Entities, name: string) {
    isLoading.value = true
    const id = await EntitiesService.add(type, name)
    addToStore(type, id)
    isLoading.value = false
  }

  return { entities, isLoading, add }
})