import { defineStore } from 'pinia'
export const usemcInstanceStore = defineStore('mcInstance', () => {
    // 状态
    const instances = ref([])

    // Action：添加实例
    const addInstance = (instance) => {
        instances.value.push(instance)
    }

    return {
        instances,
        addInstance
    }
})