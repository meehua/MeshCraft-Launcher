<template>
    <aside>
        <div class="w-48 h-full bg-neutral-100 border-r border-neutral-200 flex flex-col">
            <!-- LOGO 区域 -->
            <div class="p-4 border-b border-neutral-200">
                <div class="flex items-center gap-2">
                    <div
                        class="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded flex items-center justify-center">
                        <span class="icon-[lucide--network] w-5 h-5 text-white"></span>
                    </div>
                    <div>
                        <div class="font-semibold text-neutral-900">MeshCraft</div>
                        <div class="text-xs text-neutral-500">Launcher</div>
                    </div>
                </div>
            </div>

            <!-- 导航 -->
            <nav class="flex-1 p-2">
                <button v-for="item in navItems" :key="item.id" @click="() => setActiveTab(item.id)" :class="[
                    'w-full flex items-center gap-3 px-3 py-2 rounded-md mb-1 transition-colors',
                    activeTab === item.id
                        ? 'bg-blue-500 text-white'
                        : 'text-neutral-700 hover:bg-neutral-200'
                ]">
                    <!-- 动态生成 Iconify 图标 -->
                    <span :class="`${item.icon} w-4 h-4`"></span>
                    <span class="text-sm">{{ item.label }}</span>
                </button>
            </nav>

            <!-- 用户信息 -->
            <div class="p-3 border-t border-neutral-200">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-300 rounded-full flex items-center justify-center">
                        <span class="icon-[lucide--user] w-5 h-5 text-neutral-600"></span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm text-neutral-900 truncate">User</div>
                        <div class="text-xs text-neutral-500">在线</div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { useNavigationStore } from '@/stores/navigation'
import { storeToRefs } from 'pinia'

// 使用 Pinia store
const navigationStore = useNavigationStore()

// 使用 storeToRefs 来保持响应式
const { activeTab, navItems, currentTabLabel } = storeToRefs(navigationStore)

// 直接使用 store 中的 action
const { setActiveTab } = navigationStore
</script>