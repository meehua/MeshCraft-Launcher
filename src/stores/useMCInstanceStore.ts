import { defineStore } from 'pinia'
import { MCInstanceApi } from '@/api/main';
import type { MCInstance } from '@/api/MCInstance';
import { ref } from 'vue'
export const useMCInstanceStore = defineStore('mcInstance', () => {
    // 状态：MC实例列表
    let mcInstances = ref<MCInstance[]>([]);

    let selectedInstanceId = ref<string | null>(null);

    let selectedInstance = ref<MCInstance | null>(null);

    //获取实例列表
    const fetchInstances = async () => {
        mcInstances.value = await MCInstanceApi.getInstances()
        setSelectedInstanceOnInit();
    }
    // Action：添加实例
    const addInstance = (instance: MCInstance) => {
        mcInstances.value.push(instance)
    }

    // Action: 设置选中的实例
    const setSelectedInstance = (instanceId: string) => {
        selectedInstanceId.value = instanceId;
        selectedInstance.value = mcInstances.value.find(inst => inst.id === instanceId) || null;
    }

    // 设置选中的实例
    const setSelectedInstanceOnInit = () => {
        if (mcInstances.value.length > 0) {
            selectedInstanceId.value = mcInstances.value[0].id;
            selectedInstance.value = mcInstances.value[0];
        }
    }

    // 初始化时获取实例列表
    fetchInstances();

    return {
        mcInstances,
        fetchInstances,
        addInstance,
        selectedInstanceId,
        setSelectedInstance,
        selectedInstance
    }
})