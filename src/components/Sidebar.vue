<template>
    <aside>
        <div
            class="w-48 h-full bg-neutral-100 dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 flex flex-col">
            <!-- LOGO 区域 -->
            <div class="p-4 border-b border-neutral-200 dark:border-neutral-700">
                <div class="flex items-center gap-2">
                    <div
                        class="w-8 h-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded flex items-center justify-center">
                        <span class="icon-[lucide--network] w-5 h-5 text-white"></span>
                    </div>
                    <div>
                        <div class="font-semibold text-neutral-900 dark:text-neutral-100">MeshCraft</div>
                        <div class="text-xs text-neutral-500 dark:text-neutral-400 uppercase">Launcher</div>
                    </div>
                </div>
            </div>

            <!-- 导航 -->
            <nav class="flex-1 p-2 overflow-y-auto">
                <router-link v-for="item in navItems" :key="item.id" :to="item.path" active-class="nav-item-active"
                    class="nav-item">
                    <span :class="`${item.icon} w-4 h-4`"></span>
                    <span class="text-sm">{{ item.label }}</span>
                </router-link>
            </nav>

            <div class="p-3 border-t border-neutral-200 dark:border-neutral-700 gap-2 flex flex-col">
                <!-- 主题切换按钮（3 模式：跟随系统 / 浅色 / 深色，点击切换到下一个） -->
                <div class="">
                    <button @click="toggleTheme"
                        class="flex items-center gap-2 w-full p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                        :title="modeLabel">
                        <span :class="`${modeIcon} w-4 h-4 ${modeColorClass}`"></span>
                        <span class="text-xs text-neutral-600 dark:text-neutral-400">
                            {{ modeLabel }}
                        </span>
                    </button>
                </div>

                <!-- 用户信息 -->
                <button
                    class="gap-3 px-3 py-3 rounded-lg border border-inherit cursor-pointer flex items-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition hover:shadow-md">
                    <div
                        class="w-8 h-8 bg-neutral-300 dark:bg-neutral-600 rounded flex items-center justify-center overflow-hidden border border-border">
                        <span class="icon-[lucide--user] w-5 h-5 text-neutral-600 dark:text-neutral-300"></span>
                    </div>
                    <div class="flex-1 min-w-0 text-left">
                        <div class="text-sm text-neutral-900 dark:text-neutral-100 truncate">User</div>
                        <div class="text-xs text-neutral-500 dark:text-neutral-400">Online</div>
                    </div>
                </button>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { useNavigationStore } from '@/stores/navigation'
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const navigationStore = useNavigationStore()
const themeStore = useThemeStore()

const { activeTab, navItems, currentTabLabel } = storeToRefs(navigationStore)
const { setActiveTab } = navigationStore

const { mode, isDark } = storeToRefs(themeStore)
const { toggleTheme } = themeStore

const modeLabel = computed(() => mode.value === 'system' ? 'Follow System' : mode.value === 'light' ? 'Light Mode' : 'Dark Mode')
const modeIcon = computed(() => mode.value === 'system' ? 'icon-[lucide--sun-moon]' : mode.value === 'light' ? 'icon-[lucide--sun]' : 'icon-[lucide--moon]')
const modeColorClass = computed(() => mode.value === 'system' ? 'text-neutral-700 dark:text-neutral-300' : mode.value === 'light' ? 'text-yellow-700' : 'text-blue-400')
</script>

<style scoped>
@reference "tailwindcss";

.nav-item {
    @apply w-full flex items-center gap-3 px-3 py-2 rounded-md mb-1 transition-colors text-neutral-700;
}

.dark .nav-item {
    @apply text-neutral-300;
}

/* 不激活时的 hover 效果 */
.nav-item:not(.nav-item-active):hover {
    @apply bg-neutral-200 text-black;
}

.dark .nav-item:not(.nav-item-active):hover {
    @apply bg-neutral-700 text-white;
}

/* 激活时的样式 - 无 hover 效果 */
.nav-item-active {
    @apply bg-blue-500 text-white font-bold;
}

.dark .nav-item-active {
    @apply dark:bg-blue-600;
}
</style>