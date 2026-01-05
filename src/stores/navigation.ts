// navigation.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ICONS } from '@/utils/icons'
export const useNavigationStore = defineStore('navigation', () => {
    // 状态
    const activeTab = ref('launch')

    // 导航项数据 - 添加 path 属性
    const navItems = ref([
        {
            id: 'launch',
            label: 'Launch',
            icon: ICONS.PLAY,
            path: '/launch'  // 添加路由路径
        },
        {
            id: 'resources',
            label: 'Resources',
            icon: ICONS.LAYERS,
            path: '/resources'  // 需要确保路由中有这个路径
        },
        {
            id: 'network',
            label: 'Network',
            icon: ICONS.NETWORK,
            path: '/network'
        },
        {
            id: 'settings',
            label: 'Settings',
            icon: ICONS.SETTINGS,
            path: '/settings'
        },
    ])

    // Action：切换标签页
    const setActiveTab = (tabId) => {
        activeTab.value = tabId
    }

    // 动态添加导航项（添加 path 参数）
    const addNavItem = (id, label, iconName, path) => {
        navItems.value.push({
            id,
            label,
            icon: iconName,
            path
        })
    }

    return {
        activeTab,
        navItems,
        setActiveTab,
        addNavItem
    }
})