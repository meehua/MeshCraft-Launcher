import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
    // 状态
    const activeTab = ref('home')
    const sidebarCollapsed = ref(false)

    // 导航项数据 - 使用 Iconify 图标名称
    const navItems = ref([
        {
            id: 'launch',
            label: 'launch',
            icon: 'lucide:home',
            description: '启动'
        },
        {
            id: 'servers',
            label: 'Servers',
            icon: 'lucide:server',
            description: '服务器管理'
        },
        {
            id: 'network',
            label: 'Network',
            icon: 'lucide:network',
            description: '网状网络'
        },
        {
            id: 'settings',
            label: 'Settings',
            icon: 'lucide:settings',
            description: '设置'
        },
    ])

    // 计算属性：当前选中的导航项
    const currentNavItem = computed(() => {
        return navItems.value.find(item => item.id === activeTab.value)
    })

    // 计算属性：过滤后的导航项（可以根据权限过滤）
    const filteredNavItems = computed(() => {
        // 这里可以添加权限过滤逻辑
        return navItems.value
    })

    // Action：切换标签页
    const setActiveTab = (tabId) => {
        if (navItems.value.some(item => item.id === tabId)) {
            activeTab.value = tabId
            // 这里可以添加额外的逻辑，比如发送事件或调用 API
            console.log(`切换到标签页: ${tabId}`)
        }
    }

    // Action：切换侧边栏折叠状态
    const toggleSidebar = () => {
        sidebarCollapsed.value = !sidebarCollapsed.value
    }

    // Action：添加新的导航项（动态扩展）
    const addNavItem = (item) => {
        if (!navItems.value.some(existing => existing.id === item.id)) {
            navItems.value.push(item)
        }
    }

    // Action：移除导航项
    const removeNavItem = (itemId) => {
        const index = navItems.value.findIndex(item => item.id === itemId)
        if (index !== -1) {
            navItems.value.splice(index, 1)
        }
    }

    return {
        // State
        activeTab,
        sidebarCollapsed,
        navItems,

        // Getters
        currentNavItem,
        filteredNavItems,

        // Actions
        setActiveTab,
        toggleSidebar,
        addNavItem,
        removeNavItem,
    }
})