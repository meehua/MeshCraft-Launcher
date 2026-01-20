import { defineStore } from 'pinia'
import { ResourceApi } from '@/api/main';
import type { Resource, ResourceTab } from '@/api/resource';
import { reactive, ref } from 'vue'

export const useResourceStore = defineStore('resource', () => {

    // 以下是资源条目相关的代码
    const resources = ref<Resource[]>([])

    const fetchResources = async () => {
        resources.value = await ResourceApi.getResources();
    }

    const getResourceById = async (id: string): Promise<Resource | null> => {
        return await ResourceApi.getResourceById(id);
    }

    const tabs = ref([] as ResourceTab[]);

    // 以下是 tabs 相关的代码
    const fetchResourceTabs = async () => {
        tabs.value = await ResourceApi.getResourceTabs();
        setSelectedTabOnInit();
    }

    const selectedTab = ref<ResourceTab | null>(tabs.value.length > 0 ? tabs.value[0] : null);

    const setSelectedTab = (type: string) => {
        selectedTab.value = tabs.value.find(tab => tab.type == type) || tabs.value[0];
    }

    const setSelectedTabOnInit = () => {
        if (tabs.value.length > 0) {
            selectedTab.value = tabs.value[0];
        }
    }


    fetchResourceTabs();

    return { resources, getResourceById, tabs, selectedTab, setSelectedTab }
})