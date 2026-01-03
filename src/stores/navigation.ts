import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { ICONS } from '@/utils/icons'

export const useNavigationStore = defineStore('navigation', () => {
    // 状态
    const activeTab = ref('launch')

    // 导航项数据 - 使用图标常量（提前生成完整的 Tailwind 类，避免运行时拼接）
    const navItems = ref([
        {
            id: 'launcher',
            label: 'Launcher',
            icon: ICONS.ROCKET
        },
        {
            id: 'servers',
            label: 'Servers',
            icon: ICONS.SERVER
        },
        {
            id: 'network',
            label: 'Network',
            icon: ICONS.NETWORK
        },
        {
            id: 'settings',
            label: 'Settings',
            icon: ICONS.SETTINGS
        },
    ])

    // 计算属性 - 获取当前标签页的图标
    const currentTabIcon = computed(() => {
        const item = navItems.value.find(item => item.id === activeTab.value)
        return item ? item.icon : ICONS.HOME
    })

    // 计算属性 - 获取当前标签页的标签
    const currentTabLabel = computed(() => {
        const item = navItems.value.find(item => item.id === activeTab.value)
        return item ? item.label : ''
    })

    // Action：切换标签页
    const setActiveTab = (tabId) => {
        activeTab.value = tabId
    }

    // 动态添加图标的方法（生成完整 Tailwind 类）
    const addNavItem = (id, label, iconName) => {
        navItems.value.push({
            id,
            label,
            icon: getIconClass(`${iconName}`)
        })
    }


    return {
        activeTab,
        navItems,
        currentTabLabel,
        currentTabIcon,
        setActiveTab,
        addNavItem
    }
})